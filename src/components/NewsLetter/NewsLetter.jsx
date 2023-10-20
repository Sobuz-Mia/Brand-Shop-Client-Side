import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from 'react';
import email from "../../assets/email.jpg"
const NewsLetter = () => {
    const {isDarkMode} = useContext(AuthContext);
    return (
        <div>
        <form className=" w-full  border-b pl-0">
          <div className="flex items-center gap-3 justify-center p-5">
            <img className="w-16 h-16 rounded-full" src={email} alt="" />
            <div>
              <h2 className={isDarkMode? "text-3xl font-semibold text-white" :"text-3xl font-semibold"}>
                {" "}
                Sign Up For Newsletter
              </h2>
              <p className=" text-gray-400">
                Get E-mail update about our latest product and special offer
              </p>
            </div>
          </div>
          <fieldset className="form-control mb-7 ">
            <div className="relative w-1/2 mx-auto p-4">
              <input
                type="text"
                placeholder="Enter your email...."
                className="input input-bordered w-full "
              />
              <button className="btn bg-[#3558bb] absolute top-4 right-0 text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
};

export default NewsLetter;