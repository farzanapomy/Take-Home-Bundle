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
    const saved = state.products
      .map((category) => ({
        ...category,
        products: category.products.filter(
          (product) => product.quantity > 0
        ),
      }))
      .filter((category) => category.products.length > 0);

    if (saved.length === 0) {
      localStorage.removeItem("products");
    } else {
      localStorage.setItem("products", JSON.stringify(saved));
    }
  }, [state.products]);

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