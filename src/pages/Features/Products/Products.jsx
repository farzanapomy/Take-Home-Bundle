import Counter from "../../common/Counter";

const Products = ({ data, dispatch, selected, setSelected }) => {
   
    return (
        <div className="my-3 ">

            <div
                key={data?.id}
                className="w-full flex items-center gap-3 border bg-white border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full"
            >
                <div className="flex w-1/3 justify-center">
                    <img
                        src={data?.image}
                        alt={data?.name}
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="flex flex-1 flex-col">
                    <h6 className="text-sm font-semibold">
                        {data?.name}
                    </h6>
                    <div>
                        <p className="my-2 text-xs text-gray-500">
                            {data?.description}
                        </p>
                        <a href="#" className="mt-1 block text-xs text-[#1E3A5F] hover:underline md:ml-1 md:inline" > Learn More → </a>
                    </div>

                    {data?.variants && (
                        <div className="my-2 flex flex-wrap gap-2">
                            {data?.variants.map((variant) => (
                                <button
                                    key={variant.id}
                                    onClick={() => setSelected(variant.name)}
                                    className={`flex items-center border rounded-sm p-1 px-2 ${selected === variant.name
                                        ? "border-[#35C759]"
                                        : "border-gray-300"
                                        }`}
                                >
                                    <img
                                        src={data?.image}
                                        alt={variant.name}
                                        className="w-5 h-5"
                                    />

                                    <span className="ml-1 text-xs">
                                        {variant.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                    <div className="mt-3 flex justify-between items-center">
                        <Counter
                            data={data}
                            quantity={data.quantity}
                            dispatch={dispatch}
                            
                        />

                        <div className="text-right">
                            <p className="text-xs line-through text-gray-400">
                                ${data?.comparePrice}
                            </p>
                            <p className="font-semibold text-[#4E2FD2]">
                                ${data?.price}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Products;