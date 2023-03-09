import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSplice";

export default function ProductSmallCard({ image_path, name, price,id }) {
  const dispatch = useDispatch();
  const handleAddingToCart = () => {
    dispatch(addToCart({ img: image_path, name, price,id }));
  };

  return (
    <div className="text-left cursor-pointer">
      <img
        src={"https://admin.pickaneon.com/"+image_path}
        alt={`product image of ${name}`}
        className="h-60 w-auto rounded-lg shadow-lg mb-4"
      />
      <h3 className="text-medium font-bold mb-1">{name}</h3>
      <p className="text-lg text-pink font-bold">$ {price}</p>
      <button
        className="bg-pink hover:bg-pink/80 duration-75 transition ease-linear text-white px-6 py-2 rounded-full mt-4 active:scale-105"
        onClick={handleAddingToCart}
      >
        Shop Now
      </button>
    </div>
  );
}
