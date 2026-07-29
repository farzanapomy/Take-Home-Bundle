import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="flex items-center  gap-2">
            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow" 
            onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                -
            </button>
            <span>{count}</span>
            <button className="w-6 h-6 border rounded flex items-center justify-center cursor-pointer border-gray-300 shadow " onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
};

export default Counter;