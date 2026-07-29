import { useState } from "react";
import Counter from "../../common/Counter";

import black from "../../../assets/black.png";
import gray from "../../../assets/gray.png";
import prod from "../../../assets/product.svg";
import white from "../../../assets/white.png";

const Product = () => {
    const colors = ["White", "Grey", "Black"];
    const imgs = [white, gray, black];

    const [selected, setSelected] = useState("White");

    return (
        <div className="my-3 ">
            <div className="w-full h-full flex items-center gap-3 border bg-white border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                {/* Product Image */}
                <div className="flex w-1/3 items-center justify-center">
                    <img
                        src={prod}
                        alt="Wyze Cam v4"
                        className="h-full w-full rounded-md object-contain"
                    />
                </div>

                {/* Product Details */}
                <div className="flex flex-1 flex-col">
                    <h6 className="text-sm font-semibold">Wyze Cam v4</h6>

                    <div className="my-2 text-xs text-gray-500 md:text-sm">
                        <span>
                            The clearest Wyze Cam ever made
                        </span>

                        <a
                            href="#"
                            className="mt-1 block text-xs text-[#1E3A5F] hover:underline md:ml-1 md:inline"
                        >
                            Learn More →
                        </a>
                    </div>

                    <div className="my-2 flex flex-wrap w-full justify-start pr-2">
                        {colors.map((color, index) => (
                            <button
                                key={color}
                                onClick={() => setSelected(color)}
                                className={`mr-2 flex  w-auto items-center rounded-sm border p-1 px-2 text-sm transition-colors md:mr-1 md:px-1 ${selected === color
                                        ? "border-[#35C759] bg-white"
                                        : "border-[#E5E7EB] bg-[#F5F5F5]"
                                    }`}
                            >
                                <img
                                    src={imgs[index]}
                                    alt={color}
                                    className="h-6 w-6 md:h-3 md:w-3"
                                />

                                <span className="text-sm md:text-xs">
                                    {color}
                                </span>
                            </button>
                        ))}
                    </div>

                    <p className="text-xs text-gray-500">
                        {selected}
                    </p>

                    <div className="mt-3 flex items-center justify-between">
                        <Counter />

                        <div className="text-right">
                            <p className="text-xs text-gray-400 line-through">
                                $35.98
                            </p>

                            <p className="font-semibold text-[#4E2FD2]">
                                $27.98
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;