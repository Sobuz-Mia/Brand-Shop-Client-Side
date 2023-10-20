import category_1 from "../../assets/category-1.jpg";
import category_2 from "../../assets/category-2.jpg";
import { AiOutlineArrowRight } from 'react-icons/ai';
const TopCategories = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Top Categories</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="flex gap-5 my-5">
          <div className="border-2 h-24 rounded-lg">
            <img className="w-24 h-20 p-5" src={category_1} alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">SmartPhones and Tablet</h2>
            <p className="mb-1">Accessories</p>
            <p className="mb-1">Cases & Protection</p>
            <p className="mb-1">Drawing Tablets</p>
            <p className="mb-1">Equipment</p>
            <p className="mb-1">Smartphones</p>
            <p className="mb-1">Tablets</p>
            <button className="flex btn items-center uppercase text-2xl font-bold my-5">View All<AiOutlineArrowRight className="text-3xl"></AiOutlineArrowRight></button>
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <div className="border-2 h-24 rounded-lg">
            <img className="w-24 h-20 p-5" src={category_2} alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Headphones and Earbuds</h2>
            <p className="mb-1">Laptops</p>
            <p className="mb-1">Earbuds (In-Ear)</p>
            <p className="mb-1">Gaming Headsets</p>
            <p className="mb-1">Earbuds</p>
            <p className="mb-1">Bluetooth</p>
            <p className="mb-1">Wireless Earbuds</p>
            <button className="flex btn items-center uppercase text-2xl font-bold my-5">View All<AiOutlineArrowRight className="text-3xl"></AiOutlineArrowRight></button>
          </div>
        </div>
        <div className="flex gap-5 my-5">
          <div className="border-2 h-24 rounded-lg">
            <img className="w-24 h-20 p-5" src={category_1} alt="" />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-2">Home Entertainment</h2>
            <p className="mb-1">Audio Systems</p>
            <p className="mb-1">Games</p>
            <p className="mb-1">Home Cinema</p>
            <p className="mb-1">Projectors</p>
            <p className="mb-1">Speakers</p>
            <p className="mb-1">Laptop</p>
            <button className="flex btn items-center uppercase text-2xl font-bold my-5">View All<AiOutlineArrowRight className="text-3xl"></AiOutlineArrowRight></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
