import badge from "../../../assets/guarantee-badge.png";
import Swal from "sweetalert2";

const CheckoutSection = ({ totalPrice, totalCrossPrice }) => {
    return (
        <div className="rounded-lg bg-[#EDF4FF] mt-5  p-4 h-fit">

            <div className="flex items-center justify-between">
                <img
                    src={badge}
                    alt="Guarantee"
                    className="w-16 h-16 object-contain"
                />

                <div className="text-right">
                    <div className="inline-block rounded bg-[#4E2FD2] px-2 text-xs py-1 font-medium text-white">
                        as low as $19/19/mo
                    </div>

                    <p className="text-md text-gray-500 line-through">
                        ${totalCrossPrice.toFixed(2)}
                    </p>

                    <p className="text-lg font-bold text-[#4E2FD2]">
                        ${totalPrice.toFixed(2)}
                    </p>

                </div>
            </div>

            <p className="text-[11px] text-center font-semibold text-[#00A67E] mt-2">
                Congrats! You're saving $50.92 on your security bundle!
            </p>

            <button
                className="text-lg my-2 h-10 w-full rounded-md bg-[#4E2FD2] font-bold text-white transition hover:bg-[#4025bb] cursor-pointer"
                onClick={() => {
                    Swal.fire({
                        title: "🎉 Thank You!",
                        html: ` <p>Your order has been placed successfully.</p>`,
                        icon: "success",
                        confirmButtonText: "Continue Shopping",
                        confirmButtonColor: "#4E2FD2",
                        showClass: {
                            popup: "animate__animated animate__zoomIn",
                        },
                        hideClass: {
                            popup: "animate__animated animate__zoomOut",
                        },
                    });
                }}
            >
                Checkout
            </button>

            <div className="text-center">
                <button className="italic underline text-gray-600 hover:text-[#4E2FD2]">
                    Save my system for later
                </button>
            </div>
        </div >
    );
};

export default CheckoutSection;