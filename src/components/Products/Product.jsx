import { NavLink } from "react-router-dom";

const Product = ({ data }) => {
  const { brandName, description, name, photo, price, rating, selectedOption } =
    data;
  return (
    <div className="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full h-80"
          src={photo}
          alt="product image"
        />
      </a>
      <div className="px-10 pb-5">
        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Name: {name}
        </p>
        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Brand: {brandName}
        </p>
        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
          <NavLink
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Product;