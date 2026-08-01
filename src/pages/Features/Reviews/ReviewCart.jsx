import Counter from "../../common/Counter";

const ReviewCart = ({ title, products, dispatch }) => {

    if (!products.length) return null;


    return (
        <div className="mb-4">
            <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                {title}
            </p>

            {products.map((item) => (
                <div
                    key={item.id}
                    className="mb-2 flex items-center justify-between rounded-lg border border-gray-200 bg-white p-2 shadow-sm"
                >
                    <div className="flex items-center gap-3">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="h-10 w-10 rounded-md object-contain"
                        />

                        <div>
                            <h6 className="text-sm font-medium">{item.name}</h6>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Counter data={item} quantity={item.quantity} dispatch={dispatch} />

                        <div className="text-right">
                            <p className="text-xs text-gray-400 line-through">
                                ${item.comparePrice}
                            </p>

                            <p className="font-semibold text-[#4E2FD2]">
                                ${(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ReviewCart;