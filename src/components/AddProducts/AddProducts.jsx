import { useState } from "react";
import Swal from "sweetalert2";

const AddProducts = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const product = {
      name,
      brandName,
      price,
      rating,
      description,
      selectedOption,
      photo,
    };
    console.log(product);
    fetch("https://brandshop-server-side-jygvx8slj-sobuzs-projects.vercel.app/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Product added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
        console.log(data);
      })
      .catch();
  };
  console.log(selectedOption)
  return (
    <form onSubmit={handleAddProduct}>
      <div className="md:w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
        <h2 className="text-4xl mb-7 text-black font-bold text-center">
          Add New Product
        </h2>
        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="Enter product name"
              name="name"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Brand Name"
              name="brandName"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter price"
              name="price"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter product rating"
              name="rating"
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Description"
              name="description"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <select
              className="select select-bordered"
              onChange={handleSelectChange}
              value={selectedOption}
              name="selectedOption"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="phone">phone</option>
              <option value="computer">computer</option>
              <option value="headphone">headphone</option>
              <option value="smartwatch">smartwatch</option>
              <option value="monitor">monitor</option>
            </select>
          </div>
        </div>
        <div className="w-full">
          <input
            type="text"
            id="first_name"
            className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
            placeholder="Upload photo url"
            name="photo"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
        >
          Add a new Product
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
