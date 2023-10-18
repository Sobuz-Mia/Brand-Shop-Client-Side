import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="max-w-xs mx-auto h-80 flex items-center text-center">
        <div id="error-page">
          <h1 className="text-red-300 text-3xl text-center">Oops!</h1>
          <p className="text-2xl"><span className="text-red-400">Sorry,</span> Your pages not found. <br>
          </br> Please used right url</p>
          <p>
            <i className="text-5xl">{error.status || error.message}</i>
          </p>
          <NavLink to={'/'}><button className="btn bg-black my-5 text-white normal-case">Back to Home</button></NavLink>
        </div>
      </div>
    );
};

export default ErrorPage;