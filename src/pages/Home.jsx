
import Banner from "../components/Banner/Banner";
import Campaigns from "../components/Campaigns/Campaigns";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import OurBrands from "../components/OurBrands/OurBrands";
import TopCategories from "../components/TopCategories/TopCategories";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto py-6">
      <Banner/>
      <OurBrands />
      <TopCategories />
      <Campaigns />
      <NewsLetter/>
    </div>
  );
};

export default Home;
