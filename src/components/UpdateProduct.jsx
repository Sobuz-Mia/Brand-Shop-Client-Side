import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {

    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedOption(selectedValue);
    };
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [id]);
  const handleUpdateProduct = () =>{

  }
  return (
    <form onSubmit={handleUpdateProduct}>
      <div className="w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
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

export default UpdateProduct;
