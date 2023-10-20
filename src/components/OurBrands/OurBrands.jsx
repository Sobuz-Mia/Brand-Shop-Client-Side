import { useContext } from "react";
import BrandCard from "./BrandCard/BrandCard";
import { AuthContext } from "../../provider/AuthProvider";

const OurBrands = () => {
  const { brands,isDarkMode } = useContext(AuthContext);
  return (
    <div>
      <div className=" w-1/2 mx-auto p-3 rounded-md">
        <h2 className={isDarkMode ? "text-white text-center text-4xl font-semibold opacity-75" : "text-center text-4xl font-semibold opacity-75"}>
          Collection of Brands
        </h2>
        <div className="flex gap-7 w-1/2 mx-auto mt-3">
          <hr className="border-b-2 w-full" />
        </div>
      </div>
      <div className="grid justify-center md:grid-cols-3 gap-5 my-10 ">
        {brands?.brands?.map((brand) => (
          <BrandCard brand={brand} key={brand.id}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default OurBrands;
