import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
const BrandCard = ({ brand }) => {
    const { name, img } = brand;
    const handleButton = () =>{
        fetch(`http://localhost:5000/data/${name}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
  return (
    <div className="flex items-center bg-[#F3F6FB] rounded-lg justify-between p-4">
      <div>
        <p className="text-4xl font-bold mb-8">{name}</p>
        <NavLink to={`/products/${name}`}>
          <button
          onClick={()=>handleButton(name)}
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Shop Now
          </button>
        </NavLink>
      </div>
      <img className="w-40 rounded-md" src={img} alt="" />
    </div>
  );
};
BrandCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandCard;
