
const Counter = ({data, quantity,dispatch}) => {


    return (
        <div className="flex items-center  gap-2">
            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow"
                onClick={() => dispatch({ type: "DECREMENT", payload: { id: data.id } })}>
                -
            </button>
            <span>{quantity ? quantity : 0}</span>
            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow " onClick={() => dispatch({ type: "INCREMENT", payload: { id: data.id } })}>
                +
            </button>
        </div>
    );
};

export default Counter;