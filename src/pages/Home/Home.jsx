import ItemSection from '../Features/ItemSection';
import Review from '../Features/Reviews/Review';

const Home = () => {
    return (
        <div className="mx-auto grid w-fit max-[1250px]:grid-cols-1 gap-4  px-4 max-[1736px]:grid-cols-3 
         min-[1736px]:grid-cols-1">
            <div className="col-span-2 w-full">
                <ItemSection />
            </div>

            <Review className="w-full" />
        </div>
    );
};

export default Home;