import prod from "../../../assets/product.svg";
import white from '../../../assets/white.png'
import gray from '../../../assets/gray.png'
import black from '../../../assets/black.png'
import { useState } from "react";
const Product = () => {
    const colors = ["White", "Grey", "Black"];
    const imgs = [white, gray, black];
    const [selected, setSelected] = useState("White");
    return (
        <div className="my-3 ">
            <div className="w-full h-full  flex items-center gap-3 border  bg-white border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="w-1/3 h-2/3">
                    <img
                        src={prod}
                        alt="Wyze Cam v4"
                        className="w-full h-full rounded-md object-cover"
                    />
                </div>

                <div className='w-full'>
                    <h6 className="font-semibold text-sm">Wyze Cam v4</h6>
                    <div className="text-sm md:text-xs my-1.5 text-gray-500 ">
                        <span className="mr-2">The clearest Wyze Cam ever made
                            <a href="#" className="block md:inline mt-1 text-xs  text-[#1E3A5F] hover:underline" > Learn More → </a>
                        </span>
                    </div>

                    <div className="flex justify-start my-1 pr-2 w-full">
                        {colors.map((color) => (
                            <button key={color} onClick={() => setSelected(color)}
                                className={`w-auto rounded md:mr-1 rounded-sm flex items-center mr-2 border p-1 px-2 md:px-1 text-sm cursor-pointer transition-colors ${selected === color
                                    ? "bg-white border-[#35C759]"
                                    : "bg-[#F5F5F5] border-[#E5E7EB]"
                                    }`} > <img src={imgs[colors.indexOf(color)]} alt={color} className="w-6 h-6 md:w-3 md:h-3" /> <span className="text-sm  md:text-xs">{color}
                                </span>
                            </button>))}
                    </div>

                    <p className="text-xs text-gray-500">{selected}</p>
                    <div className="flex justify-between items-center gap-2 mt-2">
                        <div className="flex items-center gap-2 mt-2">
                            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer">
                                -
                            </button>
                            <span className="text-sm">2</span>
                            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer">
                                +
                            </button>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-gray-400 line-through text-red-600">$35.98</p>
                            <p className="font-semibold">$27.98</p>
                        </div>

                    </div>
                </div>
            </div>


        </div >
    );
};

export default Product;