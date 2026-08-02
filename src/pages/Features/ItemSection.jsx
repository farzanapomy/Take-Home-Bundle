import { useContext, useState } from "react";
import camera from "../../assets/Camera.svg";
import AccordionBody from "../Accordion/AccordionBody";
import { BuilderContext } from "../../context/BuilderContext";

const ItemSection = () => {
    const sections = [
        {
            id: 1,
            step: "Step 1 of 4",
            title: "Choose your cameras",
            category: "camera",
        },
        {
            id: 2,
            step: "Step 2 of 4",
            title: "Choose your plan",
            category: "plan",
        },
        {
            id: 3,
            step: "Step 3 of 4",
            title: "Choose your sensors",
            category: "sensor",
        },
        {
            id: 4,
            step: "Step 4 of 4",
            title: "Add extra protection",
            category: "accessory",
        },
    ];

    const [activeId, setActiveId] = useState(1);

    const { state } = useContext(BuilderContext);
    const { dispatch } = useContext(BuilderContext);


    return (
        <div className="mt-5 w-full rounded-lg p-5 md:p-8 border border-gray-300 ">
            <h2 className="text-md font-bold text-gray-600 md:text-3xl">
                Let's get started!
            </h2>

            {sections.map((section) => {
                const filteredProducts = state?.products?.filter(
                    (product) => (product?.title === section?.title)
                );
                // console.log(filteredProducts);
                return (
                    <div key={section.id}>
                        <span className="my-3 text-xs text-gray-500">
                            {section.step}
                        </span>

                        <hr className="border-gray-300" />

                        <div
                            onClick={() => setActiveId(section.id)}
                            className="my-3 flex cursor-pointer items-center justify-between rounded-md border border-gray-400 p-4 hover:bg-[#EDF4FF]"
                        >
                            <div className="flex items-center gap-2">
                                <img src={camera} alt="" />
                                <h3 className="font-semibold text-lg text-gray-500">{section.title}</h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <p>
                                    {filteredProducts?.[0]?.products?.reduce(
                                        (sum, product) => sum + (product.quantity || 0),
                                        0
                                    ) ?? 0}{" "}
                                    selected
                                </p>
                                {activeId === section.id ? <span>▲</span> : <span>▼</span>}
                            </div>
                        </div>

                        {activeId === section.id && (
                            <AccordionBody
                                data={filteredProducts}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                dispatch={dispatch}

                            />
                        )}

                        <hr className="border-gray-300" />
                    </div>
                );
            })}
        </div>
    );
};

export default ItemSection;