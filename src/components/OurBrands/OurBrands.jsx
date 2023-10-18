import { useEffect, useState } from "react";
import BrandCard from "./BrandCard/BrandCard";

const OurBrands = () => {
    const [brands,setBrands] = useState([]);

    useEffect(()=>{
        fetch('/public/data.json')
        .then(res=>res.json())
        .then(data=>{
            setBrands(data)
        })

    },[])
    console.log(brands.brands);
    return (
        <div>
            <h2 className="text-center text-4xl font-bold bg-[#2453D4] text-white p-3 rounded-md w-1/2 mx-auto">Our Brand Collection</h2>
            <div className="grid justify-center md:grid-cols-3 gap-5 my-10 ">
                {
                    brands?.brands?.map(brand=><BrandCard brand={brand} key={brand.id} ></BrandCard>)
                }
            </div>
        </div>
    );
};

export default OurBrands;