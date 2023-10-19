import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";

const Products = () => {
    const [allData,setAllData] = useState([]);

    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/data/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setAllData(data)
        })

    },[id])
    return (
        <div className="grid grid-cols-2 gap-5 px-5 py-5">
            {
                allData?.map((data,inx)=><Product data={data} key = {inx}></Product>)
            }
        </div>
    );
};

export default Products;