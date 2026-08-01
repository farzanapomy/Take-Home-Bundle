import { createContext, useEffect, useReducer } from "react";
import { builderReducer } from "./reducers";
import { initialState } from "./initialState";

export const BuilderContext = createContext();

const BuilderProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    builderReducer,
    initialState
  );

  useEffect(() => {
    if (!state.products.length) return;

    const saved = state.products
      ?.map((category) => ({
        ...category,
        products: category?.products?.filter(
          (product) => product?.quantity > 0
        ),
      }))
      .filter((category) => category?.products?.length > 0);

    // console.log("Save:", saved);

    if (saved.length > 0) {
      localStorage.setItem("saved", JSON.stringify(saved));
    }
  }, [state?.products]);


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