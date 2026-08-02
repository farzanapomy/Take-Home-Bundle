import { data } from "../data/data.json";

const saved = JSON.parse(localStorage.getItem("products") || "[]");

const merged = data.map((category) => {
    const savedCategory = saved.find((c) => c.id === category.id);

    if (!savedCategory) return category;

    return {
        ...category,
        products: category.products.map((product) => {
            const savedProduct = savedCategory.products.find(
                (p) => p.id === product.id
            );

            return savedProduct
                ? {
                    ...product,
                    quantity: savedProduct.quantity,
                    selectedColor: savedProduct.selectedColor,
                }
                : product;
        }),
    };
});

export const initialState = {
    activeStep: 1,
    products: merged,
};