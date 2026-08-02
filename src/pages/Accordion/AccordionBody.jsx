import Products from "../Features/Products/Products";

const AccordionBody = ({ setActiveId, activeId, data, dispatch}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 bg-[#EDF4FF]  rounded-lg p-4 '>
                {data?.map((product) => (
                    product?.products?.map((item) =>
                        <Products
                            key={item?.id}
                            data={item}
                            dispatch={dispatch}
                        />
                        )))}
            </div>
            <button className="mx-auto mt-4 flex h-8 w-full items-center justify-center rounded-md border border-[#6A5AF9] text-sm font-medium text-[#4E2FD2] transition  my-3 cursor-pointer" onClick={() => setActiveId(activeId + 1)}>
                {activeId === 4 ? "Finish" : "Next: Choose your Plan"}
            </button>
        </div>
    );
};

export default AccordionBody;