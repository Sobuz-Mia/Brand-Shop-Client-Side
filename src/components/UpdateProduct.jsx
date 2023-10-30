import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [data, setData] = useState(null);
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      brandName,
      price,
      rating,
      description,
      selectedOption,
      photo,
    };
    fetch(`http://localhost:5000/updateCart/${data?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount>0){
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Your Data updated successfully',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset();
        }
    })
  };
  return (
    <form onSubmit={handleUpdateProduct}>
      <div className="w-1/2 mx-auto bg-[#F3F6FB] p-10 mt-5 border-none my-10">
        <h2 className="text-4xl mb-7 text-black font-bold text-center">
          Update Product
        </h2>
        <div className="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm border-none w-full p-2.5"
              placeholder="Enter product name"
              name="name"
              defaultValue={data?.name}
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Brand Name"
              name="brandName"
              defaultValue={data?.brandName}
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter price"
              name="price"
              defaultValue={data?.price}
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter product rating"
              name="rating"
              defaultValue={data?.rating}
            />
          </div>
          <div>
            <input
              type="text"
              id="first_name"
              className="bg-white  text-gray-900 text-sm rounded-lg  w-full p-2.5"
              placeholder="Enter Description"
              name="description"
              defaultValue={data?.description}
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
            defaultValue={data?.photo}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-black w-full my-4  rounded-lg px-5 py-2.5 text-center"
        >
          Update Product
        </button>
      </div>
    </form>
  );
};

export default UpdateProduct;
