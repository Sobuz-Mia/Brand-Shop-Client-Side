import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const regEx = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{6,}$/;
  const navigate = useNavigate();

  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (!regEx.test(password)) {
      Swal.fire({
        icon: "error",
        text: "Password must be 6 characters with one capital letter and special characters",
      });
    } else {
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate("/");
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your account create successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((err) => {
          if (err) {
            Swal.fire({
              icon: "error",
              text: "Already exist email/ something wrong",
            });
          }
        });
    }

    console.log(name, email, password);
  };

  return (
    <div className="mx-auto mb-10 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleCreateUser} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Register to our platform
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="your name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            required
          />
        </div>
        <div className="flex items-start">
          <a
            href="#"
            className="ml-3 text-sm text-blue-700 hover:underline dark:text-blue-500"
          >
            Lost Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300  mx-auto">
          <NavLink to={"/login"}>
            already have exist account?
            <button className="text-blue-700 hover:underline dark:text-blue-500">
              {" "}
              Login account
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Register;
