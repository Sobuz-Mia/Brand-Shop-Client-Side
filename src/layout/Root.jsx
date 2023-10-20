import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/NAvbar";
import Footer from "../pages/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
    const {isDarkMode} = useContext(AuthContext);
    console.log(isDarkMode);
    return (
        <div className={isDarkMode? 'dark-mode' : 'light-mode'}>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Root;