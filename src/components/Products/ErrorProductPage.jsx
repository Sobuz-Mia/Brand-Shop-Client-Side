import { NavLink } from "react-router-dom";

const ErrorProductPage = () => {
  return (
    <div>
      <div className=" h-80 mx-auto text-center md:-mr-80 ">
        <div id="error-page ml-80">
          <h1 className="text-red-300 text-3xl text-center">Oops!</h1>
          <p className="text-2xl">
            <span className="text-red-400">Sorry,</span> Product Not Found{" "}
            <br></br> Please add product in this Brand
          </p>
          <p>
           
          </p>
          <NavLink to={"/"}>
            <button className="btn bg-black my-5 text-white normal-case">
              Back to Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorProductPage;
