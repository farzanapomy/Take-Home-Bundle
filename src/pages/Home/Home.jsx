import ItemSection from '../Features/ItemSection';
import Review from '../Features/Review';

const Home = () => {
    return (
        <div class="mx-auto px-4 gap-4 w-screen   flex justify-between flex-col md:flex-row xl:flex-col"> 
            <ItemSection className="w-full"></ItemSection>
            <Review className="w-full"></Review>
        </div>
    );
};

export default Home;