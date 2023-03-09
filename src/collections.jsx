import React, { useEffect, useState } from "react";
import { collections } from "./components/data/collections";
import CollectionCard from "./components/collectionCard";
import ScrollToTopOnMount from "./components/scrolltoTop";
import axios from "axios";

export default function Collections() {
  const [data,setData]=useState()
  useEffect(()=>{
    const getData = async()=>{
      try {
        const response = await axios.post("https://admin.pickaneon.com/api/get_categories")
        setData(response.data.categories)
    } catch (err) {
        console.error(err);
    }
    }
    getData()
  },[])
  return (
    <div>
      <ScrollToTopOnMount />
      <div className="my-16 w-11/12 mx-auto">
        <h2 className="text-4xl text-pink text-center font-bold mb-8">
          All Collections (A-Z)
        </h2>
        <p className="">
          This list of our collections might be a bit overwhelming to look
          through everything, so please get in touch if you want to talk it
          through with someone.We make all our signs from scratch, if you would
          like any customisation on any design on the site drop us an email and
          we'll send a fresh visual over to you.If you want something completely
          unique tell us more here.
        </p>
      </div>
      <div className="flex flex-wrap gap-10 justify-center my-16">
        {data&& data.map((collection, i) => (
          <CollectionCard key={i} {...collection} />
        ))}
      </div>
    </div>
  );
}
