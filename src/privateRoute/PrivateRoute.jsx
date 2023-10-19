import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if (loading)
    return (
      <div className="w-24 mx-auto flex items-center h-screen">
        <span className="loading loading-spinner text-secondary w-full"></span>
      </div>
    );
    if(user){
        return children
    }

   return <Navigate to={'/login'}></Navigate>
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;