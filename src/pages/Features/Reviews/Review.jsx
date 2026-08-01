import ReviewCart from "./ReviewCart";
import plan from "../../../assets/plan.svg";
import ship from "../../../assets/shipping.svg";
import CheckoutSection from "../CheckoutSection/CheckoutSection";
import { useContext } from "react";
import { BuilderContext } from "../../../context/BuilderContext";

const Review = () => {

    const { state } = useContext(BuilderContext);
    const selectedProducts = state?.products?.map((category) => ({
        ...category,
        products: category?.products?.filter(
            (product) => product.quantity > 0
        ),
    }));
    console.log(selectedProducts);

    const totalPrice = 0


    return (
        <div className="mt-5 h-fit rounded-lg bg-[#EDF4FF] p-5 mx-auto">

            <p className="text-xs uppercase tracking-wide text-gray-400">
                Review
            </p>

            <h2 className="mt-1 text-xl font-bold text-gray-700">
                Your security system
            </h2>

            <p className="mt-1 text-sm text-gray-600">
                Review your personalized protection system designed to keep what
                matters most safe.
            </p>

            <hr className="my-5 border-gray-300" />
            <div className="grid grid-cols-1 gap-5 xxl:grid-cols-2">
                <div>
                    <div className="space-y-3">
                        {selectedProducts.some((category) => category.products.length > 0) ? (
                            selectedProducts.map((category) => (
                                <ReviewCart
                                    key={category.id}
                                    title={category.title}
                                    products={category.products}
                                    totalPrice = (totalPrice + (item.price * item.quantity).toFixed(2))
                                />
                        ))
                        ) : (
                        <p className="text-center text-sm text-gray-500">
                            No items selected yet.
                        </p>
                        )}
                    </div>
                    <hr className="my-5 border-gray-300" />


                    <div className="flex items-center justify-between">
                        <div>
                            <p className="mb-2 text-xs font-semibold uppercase text-gray-400">
                                Plan
                            </p>

                            <div className="flex items-center gap-2">
                                <img src={plan} alt="Plan" />

                                <p className="font-semibold text-gray-700">
                                    Cam <span className="text-[#4E2FD2]">Unlimited</span>
                                </p>
                            </div>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-400 line-through">$35.98</p>
                            <p className="font-semibold text-[#4E2FD2]">$27.98</p>
                        </div>
                    </div>

                    <hr className="my-5 border-gray-300" />

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <img src={ship} alt="Shipping" />

                            <p className="font-semibold text-gray-700">
                                Fast Shipping
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-400 line-through">$35.98</p>
                            <p className="font-semibold text-[#4E2FD2]">$27.98</p>
                        </div>
                    </div></div>

                <CheckoutSection />
            </div>
        </div>
    );
};

export default Review;