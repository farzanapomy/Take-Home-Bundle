import prod from "../../../assets/product.svg";
import Counter from "../../common/Counter";
const ReviewCart = () => {
    return (
        <div>
            <p className="text-gray-400">CAMERAS</p>

            <div>
                <div className="w-full h-full  flex justify-evenly items-center gap-3 border  bg-white border-gray-300 p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
                    <div className="w-1/12 h-fit">
                        <img
                            src={prod}
                            alt="Wyze Cam v4"
                            className="w-full h-full rounded-md object-cover"
                        />
                    </div>
                    <h6 className="font-medium">Wyze Cam v4</h6>
                    <Counter></Counter>
                    <div className="text-right">
                        <p className="font-light line-through text-red-600">$35.98</p>
                        <p className="text-blue-800 font-semibold">$27.98</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;