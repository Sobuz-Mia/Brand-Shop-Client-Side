import Bannar from '../components/Bannar/Bannar';
import OurBrands from '../components/OurBrands/OurBrands';
import TopCategories from '../components/TopCategories/TopCategories';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto py-6'> 
          <Bannar/>
          <OurBrands/>
          <TopCategories/>
        </div>
    );
};

export default Home;