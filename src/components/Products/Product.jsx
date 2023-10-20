import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
const Product = ({ data }) => {
  const { brandName, name, photo, price, rating, selectedOption, _id } = data;
  const navigate = useNavigate();

  return (
    <div>
      <div className="w-full  bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
          <img
            className="p-8 rounded-t-lg w-full h-80"
            src={photo}
            alt="product image"
          />
        </a>
        <div className="px-10 pb-5">
          <p className="text-xl font-semibold tracking-tight text-gray-900 ">
            Name: {name}
          </p>
          <p className="text-xl font-semibold tracking-tight text-gray-900 ">
            Brand: {brandName}
          </p>
          <p className="text-xl font-semibold tracking-tight text-gray-900 ">
            Type: {selectedOption}
          </p>

          <div className="flex items-center mt-2.5 mb-5 justify-between">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {rating}.00
              </span>
            </div>

            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              Price : {price}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <NavLink onClick={() => navigate(`/productDetails/${_id}`)}>
              <button className=" btn btn-outline btn-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                {" "}
                Show Details
              </button>
            </NavLink>
            <NavLink onClick={() => navigate(`/update/${_id}`)}>
              <button className=" btn btn-outline focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                {" "}
                Update
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
Product.propTypes = {
  data: PropTypes.object,
};
export default Product;
