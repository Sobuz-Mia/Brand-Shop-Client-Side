import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(` https://brandshop-server-side-jygvx8slj-sobuzs-projects.vercel.app/details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  const handleAddCart = (data) => {
    const {
      brandName,
      description,
      name,
      photo,
      price,
      rating,
      selectedOption,
      _id,
    } = data;
    const saveData = {
      brandName: brandName,
      description: description,
      name: name,
      photo: photo,
      price: price,
      rating: rating,
      selectedOption: selectedOption,
      cart_id: _id,
      email: user.email,
    };
    fetch(" https://brandshop-server-side-jygvx8slj-sobuzs-projects.vercel.app/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(saveData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully added to your   Cart",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="md:w-1/2 m-5  mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full h-80"
          src={data.photo}
          alt="product image"
        />
      </a>
      <div className="px-10 pb-5">
        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Name: {data.name}
        </p>
        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Brand: {data.brandName}
        </p>
        <p className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Type: {data.selectedOption}
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
              {data.rating}.00
            </span>
          </div>

          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            Price : {data.price}
          </span>
          
        </div>
        <p className="text-2xl text-white p-3">{data.description}</p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleAddCart(data)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
