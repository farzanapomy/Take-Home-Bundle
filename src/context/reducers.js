import { ACTIONS } from "./actionTypes";

export const builderReducer = (state, action) => {
    switch (action.type) {

        case ACTIONS.INCREMENT: {
            const updatedState = {
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

            // console.log(
            //     updatedState.products[0].products.map((p) => ({
            //         name: p.name,
            //         quantity: p.quantity,
            //     }))
            // );

            return updatedState;
        }


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


        case ACTIONS.SET_COLOR:
            return {
                ...state,
                products: state?.products?.map((category) => ({
                    ...category,
                    products: category?.products?.map((product) =>
                        product.id === action?.payload.productId
                            ? {
                                ...product,
                                selectedColor: action?.payload.colorId,
                            }
                            : product
                    ),
                })),
            };

        default:
            return state;
    }
};