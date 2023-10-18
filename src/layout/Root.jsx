import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/NAvbar";
import Footer from "../pages/Footer";

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;