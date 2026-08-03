import { ACTIONS } from "./actionTypes";

export const builderReducer = (state, action) => {
    switch (action.type) {

        case ACTIONS.INCREMENT:
            return {
                ...state,
                products: state.products.map((category) => ({
                    ...category,
                    products: category.products.map((product) => {
                        if (product.id !== action.payload?.productId) {
                            return product;
                        }

                        // Variant product
                        if (product.variants?.length) {
                            return {
                                ...product,
                                variants: product.variants.map((variant) =>
                                    variant.id === action.payload.variantId
                                        ? {
                                            ...variant,
                                            quantity: variant.quantity + 1,
                                        }
                                        : variant
                                ),
                            };
                        }

                        // Normal product
                        return {
                            ...product,
                            quantity: product.quantity + 1,
                        };
                    }),
                })),
            };


        case ACTIONS.DECREMENT:
            return {
                ...state,
                products: state.products.map((category) => ({
                    ...category,
                    products: category.products.map((product) => {
                        if (product.id !== action.payload.productId) {
                            return product;
                        }

                        // Variant product
                        if (product.variants?.length) {
                            return {
                                ...product,
                                variants: product.variants.map((variant) =>
                                    variant.id === action.payload.variantId
                                        ? {
                                            ...variant,
                                            quantity: Math.max(variant.quantity - 1, 0),
                                        }
                                        : variant
                                ),
                            };
                        }

                        // Normal product
                        return {
                            ...product,
                            quantity: Math.max((product.quantity || 0) - 1, 0),
                        };
                    }),
                })),
            };


        case ACTIONS.SET_COLOR:
            return {
                ...state,
                products: state.products.map((category) => ({
                    ...category,
                    products: category.products.map((product) =>
                        product.id === action.payload.productId
                            ? {
                                ...product,
                                selectedVariant: action.payload.variantId,
                            }
                            : product
                    ),
                })),
            };

        default:
            return state;
    }
};