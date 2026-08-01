import { data } from "../data/data.json";

let savedProducts = null;

try {
    const stored = localStorage.getItem("saved");

    if (stored) {
        savedProducts = JSON.parse(stored);
    }
} catch (error) {
    console.error(error);
}

const initialState = {
    activeStep: 1,
    products: savedProducts ?? data,
};

export { initialState };