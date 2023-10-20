
import Banner from "../components/Banner/Banner";
import Campaigns from "../components/Campaigns/Campaigns";
import OurBrands from "../components/OurBrands/OurBrands";
import TopCategories from "../components/TopCategories/TopCategories";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <Banner/>
      <OurBrands />
      <TopCategories />
      <Campaigns />
    </div>
  );
};

export default Home;
