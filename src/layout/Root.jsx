import { Outlet } from "react-router-dom";
import Home from "../pages/Home";

const Root = () => {
    return (
        <div>
            <Home/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;