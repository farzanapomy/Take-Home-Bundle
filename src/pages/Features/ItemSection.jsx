import { useState } from 'react';
import camera from '../../assets/Camera.svg';
import AccordionBody from '../Accordion/AccordionBody';
const ItemSection = () => {
    const sections = [
        {
            id: 1,
            step: "Step 1 of 4",
            title: "Choose your cameras",
        },
        {
            id: 2,
            step: "Step 2 of 4",
            title: "Choose your plan",
        },
        {
            id: 3,
            step: "Step 3 of 4",
            title: "Choose your sensors",
        },
        {
            id: 4,
            step: "Step 4 of 4",
            title: "Add extra protection",
        },
    ];
    const [activeId, setActiveId] = useState(1);

    return (
        <>
            <div className='mt-5  p-4 md:p-8 rounded-lg w-full'>
                <h2 className="font-bold text-md md:text-3xl text-gray-600">Let’s get started!</h2>
                {sections.map((section) => (
                    <div key={section.id} className="">
                        <span className="my-3 text-xs text-gray-500 ">
                            {section.step}
                        </span>

                        <hr className="border-gray-300" />

                        <div
                            onClick={() => (setActiveId(section.id) && setActiveId(!activeId))}
                            className="border border-gray-400 p-4  flex items-center justify-between my-3 cursor-pointer transition-colors duration-300 rounded-md  hover:bg-[#EDF4FF]"
                        >
                            <div className="flex items-center gap-2">
                                <img src={camera} alt="" />
                                <h3>{section.title}</h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <p>2 selected</p>

                                {activeId === section.id ? (
                                    <span>▲</span>
                                ) : (
                                    <span>▼</span>
                                )}
                            </div>
                        </div>

                        {activeId === section.id && <AccordionBody setActiveId={setActiveId} activeId={activeId} />}

                        <hr className="border-gray-300" />
                    </div>
                ))}

            </div>
        </>);
};

export default ItemSection;