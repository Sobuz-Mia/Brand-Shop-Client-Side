import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ErrorProductPage from "./ErrorProductPage";
import Slider from "../Slider/Slider";

const Products = () => {
  const [allData, setAllData] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/data/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllData(data);
      });
  }, [id]);
  return (
    <div>
      <div className="p-4">
      <Slider/>
      </div>
      <div className="grid grid-cols-2 gap-5 px-5 py-5">
      {allData.length > 0 ? (
        allData?.map((data, inx) => <Product data={data} key={inx}></Product>)
      ) : (
        <ErrorProductPage />
      )}
      {}
    </div>
    </div>
  );
};

export default Products;
