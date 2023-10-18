import Bannar from '../components/Bannar/Bannar';
import Navbar from '../components/Navbar/NAvbar';
import OurBrands from '../components/OurBrands/OurBrands';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto py-6'> 
          <Bannar/>
          <OurBrands/>
        </div>
    );
};

export default Home;