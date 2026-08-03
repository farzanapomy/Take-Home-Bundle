
const Counter = ({ data, quantity, dispatch }) => {


    return (
        <div className="flex items-center  gap-2">
            <button
                className={`w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow 
               ${quantity === 0 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                onClick={() => dispatch({
                    type: "DECREMENT",
                    payload: {
                        productId: data.id,
                        variantId: data.selectedVariant?.id,
                    },
                })}
                disabled={quantity === 0}>
                -
            </button>

            <span>{quantity ? quantity : 0}</span>

            <button
                className={`w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow 
                ${quantity >= 10 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}

                onClick={() => dispatch({
                    type: "INCREMENT",
                    payload: {
                        productId: data.id,
                        variantId: data.selectedVariant,
                    },
                })}
                disabled={quantity >= 10}>
                +
            </button>
        </div>
    );
};

export default Counter;