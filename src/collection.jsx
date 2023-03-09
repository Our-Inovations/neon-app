import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collections } from "./components/data/collections";
import ProductSmallCard from "./components/productSmallCard";
import ScrollToTopOnMount from "./components/scrolltoTop";

export default function Collection() {
  const { collectionId } = useParams();
  const [data,setData]=useState()
  useEffect(()=>{
    const getData = async()=>{
      try {
        const response = await axios.post("https://admin.pickaneon.com/api/get_products_against_category",{category_id:collectionId})
        setData(response.data.products[0].products)
    } catch (err) {
        console.error(err);
    }
    }
    getData()
  },[])
  return (
    <div className="text-center my-16 ">
      <ScrollToTopOnMount />
      <h2 className="text-4xl text-pink font-bold">
        Collection
      </h2>
      <div className="flex flex-wrap gap-x-10 gap-y-16 w-11/12 my-20 items-center justify-center mx-auto">
        {data && data.map((collection, i) => (
          <ProductSmallCard key={i} {...collection} />
        ))}
      </div>
    </div>
  );
}
