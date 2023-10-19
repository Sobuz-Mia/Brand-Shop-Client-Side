import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const BrandCard = ({ brand }) => {
  const { name, img } = brand;
  const navigate = useNavigate();
  return (
    <div className="flex items-center bg-[#F3F6FB] rounded-lg justify-between p-4">
      <div>
        <p className="text-4xl font-bold mb-8">{name}</p>
        <button
          onClick={() => navigate(`/products/${name}`)}
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Shop Now
        </button>
      </div>
      <img className="w-40 rounded-md" src={img} alt="" />
    </div>
  );
};
BrandCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandCard;
