import { FaHandPointDown } from 'react-icons/fa';
const Banner = () => {
  return (
    <div className="mb-8 rounded-lg">
      <div
        className="hero min-h-screen rounded-lg"
        style={{
          backgroundImage:
            "url(https://cdn.vectorstock.com/i/1000x1000/98/62/electronic-computer-hardware-technology-template-vector-27079862.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content w-full    ">
          <div className="max-w-lg">
            
            <h1 className="mb-5 text-5xl font-bold text-amber-400">Hello Genius</h1>
            <p>Let's Subscribe our website </p>
            <fieldset className="form-control ">
            <div className="relative w-full mx-auto p-4">
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
            <button className="btn btn-outline text-amber-300 my-7">Let's show our Brands <FaHandPointDown className='text-3xl'></FaHandPointDown></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
