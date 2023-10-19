import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import userLogo from "../../assets/userLogo.png";

const Navbar = () => {
  const { user, loggedOut } = useContext(AuthContext);

  const handleSignout = () => {
    loggedOut().then();
  };
  const navLinks = (
    <>
      <li className="mr-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/addProducts"}>Add Product</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to={"/carts"}> My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mt-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm text-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex md:flex-row flex-col items-center gap-3">
          <img className="w-10 h-10 rounded-full" src={logo} alt="" />
          <p className="text-3xl flex flex-col font-semibold">
            Smart Shop{" "}
            <span className="text-sm font-normal">Easy Solution</span>
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && <p className="mr-2">{user.displayName}</p>}
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className=" rounded-full">
            <img src={user ? user?.photoURL : userLogo} />
          </div>
        </label>
        {user ? (
          <NavLink to={"/login"}>
            <button
              onClick={handleSignout}
              className="btn btn-ghost normal-case text-xl"
            >
              Logout
            </button>
          </NavLink>
        ) : (
          <NavLink to={"/login"}>
            <button className="btn btn-ghost normal-case text-xl">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
