import Bannar from '../components/Bannar/Bannar';
import Navbar from '../components/Navbar/NAvbar';

const Home = () => {
    return (
        <div className='max-w-6xl mx-auto py-6'> 
          <Navbar></Navbar>
          <Bannar/>
        </div>
    );
};

export default Home;