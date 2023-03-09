import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateOpener } from "../../../../store/menuSplice";

const megaMenuItems = [
  "Birthday",
  "Wedding",
  "Social Media",
  "Business Logos",
  "Club or Bar",
  "Gym",
  "Salon",
  "Fast Food",
  "Quotation",
  "Love",
];
const megaMenu2 = [
  "Open or Close Signs",
  "Cheap Under $149",
  "Kitchen",
  "Kids Zone",
  "Selfie Style",
  "18+",
  "Chrismas",
  "Halloween",
  "Game Zone",
  "Wings Zone",
];

export default function MegaMenu(props) {
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
  const open = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();
  return (
    <div
      ref={props.passRef}
      className={`${
        open ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-80"
      } duration-200 transition-transform ease-out absolute top-24 px-8 py-10 shadow-xl z-20 w-10/12  bg-white mx-auto left-1/2 -translate-x-1/2 rounded-lg flex`}
    >
      <div className="w-1/2">
        <h2 className="text-lg font-bold text-pink">
          Shop design open for ideas
        </h2>
        <div className="flex gap-24 flex-wrap  ml-6 mt-4 border-r border-[#dee2e6] ">
          <div>
            {data && data.map((menu, i) => (
              <Link
                to={`collections/${menu.id}`}
                key={i + 20}
                onClick={() => dispatch(updateOpener(false))}
                className="block font-medium px-4 py-2 hover:bg-pink hover:text-white cursor-pointer duration-75 ease-out  rounded-sm"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div>
       
          </div>
        </div>
      </div>
      <Link
        to={"/collections"}
        onClick={() => dispatch(updateOpener(false))}
        className="absolute py-4 px-4 text-sm hover:bg-pink duration-100 ease-out rounded-full bg-black text-white right-10 bottom-10"
      >
        View all collections
      </Link>
    </div>
  );
}
