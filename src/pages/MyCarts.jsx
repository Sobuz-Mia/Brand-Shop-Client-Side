import { useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MyCarts = () => {
  const { user } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(` https://brandshop-server-side-jygvx8slj-sobuzs-projects.vercel.app/carts/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(` https://brandshop-server-side-jygvx8slj-sobuzs-projects.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              console.log(data);

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
                setData((data) => data.filter((item) => item._id !== id));
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-2xl text-center my-7 font-bold text-red-500">
        Welcome to your Cart
      </h2>
      <div className="grid md:grid-cols-2 gap-4 px-4">
        { data.length>0 ?
        data.map((data) => (
          <div
            className="w-full mx-auto my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={data._id}
          >
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
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleDelete(data?._id)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )):
        <h2 className="text-3xl text-center text-red-400 flex justify-center my-10">Do not have any add Items. <br /> Please add first </h2>
      }
      </div>
    </div>
  );
};

export default MyCarts;
