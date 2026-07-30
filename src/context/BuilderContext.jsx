import { createContext, useReducer } from "react";
import { builderReducer } from "./reducers";
import { initialState } from "./initialState";

export const BuilderContext = createContext();

const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    builderReducer,
    initialState
  );

  return (
    <BuilderContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
};

export default BuilderProvider;