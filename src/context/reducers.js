import { ACTIONS } from "./actionTypes";

export const builderReducer = (state, action) => {
    switch (action.type) {
        // Load Products
        case ACTIONS.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };

        case ACTIONS.SET_ACTIVE_STEP:
            return {
                ...state,
                activeStep: action.payload,
            };


        case ACTIONS.INCREMENT:
            return {
                ...state,
                products: state.products.map((category) => ({
                    ...category,
                    products: category.products.map((product) =>
                        product.id === action.payload.id
                            ? {
                                ...product,
                                quantity: (product.quantity || 0) + 1,
                            }
                            : product
                    ),
                })),
            };


        case ACTIONS.DECREMENT:
            return {
                ...state,
                products: state.products.map((category) => ({
                    ...category,
                    products: category.products.map((product) =>
                        product.id === action.payload.id
                            ? {
                                ...product,
                                quantity: Math.max(0, (product.quantity || 0) - 1),
                            }
                            : product
                    ),
                })),
            };

        case ACTIONS.CHANGE_VARIANT:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? {
                            ...product,
                            selectedVariant: action.payload.variant,
                        }
                        : product
                ),
            };

        default:
            return state;
    }
};