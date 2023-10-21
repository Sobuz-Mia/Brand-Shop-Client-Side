
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
    
    const {loggedIn,googleLogIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleUser = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loggedIn(email,password)
        .then(result=>{
            if(result.user){
                Swal.fire({
                    position: 'Center',
                    icon: 'success',
                    title: 'Successfully login your account',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(location?.state ? location.state : '/')
            }
        })
        .catch(err=>{
            if(err){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...Sorry',
                    text: 'Invalid email / password!',
                  })
            }
        })
    }

    const handleLoginWithGoogle = () =>{
        googleLogIn()
        .then(
            navigate('/')
        )
    }

  return (
    <div className="mx-auto mb-10 max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form onSubmit={handleUser} className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Sign in to our platform
        </h5>
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
          Login to your account
        </button>
        <button
        onClick={handleLoginWithGoogle}
          type="submit"
          className="w-full text-white btn-ghost normal-case btn-outline btn focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Login with Google
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300 w-3/4 mx-auto">
          <NavLink to={"/register"}>
            Not registered?
            <button className="text-blue-700 hover:underline dark:text-blue-500">
              Create account
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
