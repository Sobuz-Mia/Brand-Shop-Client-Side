import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
    const {isDarkMode} = useContext(AuthContext);
    return (
        <div className={isDarkMode?'dark-mode' :'light-mode' }>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;