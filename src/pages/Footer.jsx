import email from '../../src/assets/email.jpg'

const Footer = () => {
  return (
    <div>
      {/* bg-[#2453D4] */}
      <div>
        <form className=" w-full bg-[#2453D4] border-b pl-0">
          <div className='flex items-center gap-3 justify-center p-5'>
            <img className='w-16 h-16 rounded-full' src={email} alt="" />
            <div>
              <h2 className="text-white text-3xl font-semibold "> Sign Up For Newsletter</h2>
              <p className=" text-slate-300">
                Get E-mail update about our latest product and special offer
              </p>
            </div>
          </div>
          <fieldset className="form-control ">
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
      <footer className="footer p-10 bg-[#2453D4] text-white">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
