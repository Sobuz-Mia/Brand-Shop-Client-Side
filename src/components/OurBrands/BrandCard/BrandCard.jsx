import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const BrandCard = ({ brand }) => {
  const { name, img } = brand;
  const navigate = useNavigate();
  return (
    <div className="flex items-center bg-[#F3F6FB] flex-col-reverse rounded-lg justify-between p-4">
      <div className="flex flex-col">
        <button onClick={() => navigate(`/products/${name}`)} className="text-4xl font-bold my-8">{name}</button>
        <button
          onClick={() => navigate(`/products/${name}`)}
          href="#"
          className="inline-flex items-center px-3 py-2 btn btn-outline font-medium text-center rounded-lg focus:ring-4 focus:outline-none "
        >
          Shop Now
        </button>
      </div>
      <img className="w-full rounded-2xl" src={img} alt="" />
    </div>
  );
};
BrandCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandCard;
