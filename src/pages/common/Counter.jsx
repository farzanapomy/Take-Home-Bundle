
const Counter = ({ quantity, onIncrement, onDecrement }) => {


    return (
        <div className="flex items-center  gap-2">
            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow"
                onClick={onDecrement}>
                -
            </button>
            <span>{quantity ? quantity : 0}</span>
            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow " onClick={onIncrement}>
                +
            </button>
        </div>
    );
};

export default Counter;