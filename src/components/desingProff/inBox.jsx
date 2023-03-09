import { addToCart } from "../../../store/cartSplice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  updateWallMountingKit,
  updatePrice,
} from "../../../store/customNeonSplice";
import { Link } from "react-router-dom";

export default function InBox({
  calculatedPrice,
  messages,
  color,
  imgGenerated,
}) {
  const dispatch = useDispatch();
  const [radioSelected, setRadioSelected] = useState(false);
  const inputValue1 = useSelector(
    (state) => state.customReducer.wallMountingKit
  );

  const handleWallKitChange = (e) => {
    e.preventDefault();
    dispatch(updateWallMountingKit(e.target.value));
    dispatch(updatePrice());
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(
      addToCart({
        customText: messages,
        title: "Custom Neon Sign",
        price: calculatedPrice,
        color,
        img: imgGenerated,
      })
    );
  };
  return (
    <div className="my-10">
      <h3 className="proffh3">What&apos;s in the box</h3>
      <div className="mt-4 mb-6">
        <ul className="flex flex-wrap gap-3">
          {inBox.map((item) => (
            <li
              className="px-6 py-3 bg-[#F5F5F5] font-bold rounded-full"
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="font-bold mt-6">
          Electrical Plug:{" "}
          <span className="font-normal">USA / CANADA 120V</span>
        </p>
        <p>
          Some signs may require multiple power cords, which will be provided if
          necessary.
        </p>
      </div>
      <form>
        <div className="mb-4">
          <div className="mb-4 flex gap-8 items-center">
            <div>
              <input
                type="radio"
                id="wallKit"
                name="wallKit"
                value={radioSelected}
                onChange={() => setRadioSelected(!radioSelected)}
                className=" relative float-left mt-0.5 mr-1 ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-pink checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-pink checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-pink checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              />
              <label
                for="wallKit"
                className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
              >
                Wall Mounting Kit
              </label>
            </div>
            <div>
              <select
                className={`bg-[#F5F5F5] px-4 py-2 rounded-xl focus:outline-none ${
                  radioSelected ? "cursor-pointer" : "cursor-not-allowed"
                }`}
                disabled={!radioSelected}
                name="wallKitSelect"
                id="wallKitSelect"
                onChange={handleWallKitChange}
              >
                <option value="default" default>
                  Select Option
                </option>
                <option value="sliver">
                  Silver <span style={{ color: "#fff" }}>$15</span>
                </option>
                <option value="brownze">Brownze $20</option>

                <option value="brown">Brown $ 15</option>
              </select>
            </div>
          </div>
          <div>
            <input
              type="radio"
              id="signHang"
              name="signHang"
              value="true"
              className="relative float-left mt-0.5 mr-1 ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-pink checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-pink checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-pink checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            />
            <label
              for="signHang"
              className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer"
            >
              Sign hanging kit
            </label>
          </div>
        </div>
        <p>Standard Delivery: Custom made and delivered in 4-6 weeks</p>
        <p className="font-bold">
          Specail Offer:
          <span className="font-normal"> Free Remote and Dimmer.</span>
        </p>
        <h3 className="text-2xl font-bold my-8">
          Total with selected options:{" "}
          <span className="text-pink">$ {calculatedPrice}</span>
        </h3>
        <div className="my-10">
          <h3 className="proffh3 text-3xl">
            I approve the design for production
          </h3>
          <p className="mt-2">
            (You can add comments/requests when checking out)
          </p>
          <div className="flex flex-col md:flex-row  gap-10 mt-8">
            <div class="flex items-center ">
              <input
                checked
                id="default-radio-1"
                type="radio"
                value=""
                name="default-radio"
                class="relative float-left mt-0.5 mr-1 ml-[.2rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-pink checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-pink checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-pink checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              />
              <label
                for="default-radio-1"
                class="ml-2  font-medium text-gray-900 dark:text-gray-300"
              >
                <span className="text-bold text-pink">Yes</span> I have checked
                and approved the design
              </label>
            </div>
            <div class="flex items-center">
              <input
                id="default-radio-2"
                type="radio"
                value=""
                name="default-radio"
                class="relative float-left mt-0.5  mr-1 md:ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-pink checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-pink checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-pink checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
              />
              <label
                for="default-radio-2"
                class="ml-2 font-medium text-gray-900 dark:text-gray-300 cursor-pointer"
              >
                <span className="text-bold text-pink">No</span> I need further
                assistance
              </label>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleAddToCart}
            className="bg-pink text-white rounded-full px-14 py-3 cursor-pointer"
          >
            Add to Cart
          </button>
          <Link
            to={"/contact"}
            className="ml-6 border-2  border-pink text-pink rounded-full px-14 py-3 cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      </form>
    </div>
  );
}

const inBox = [
  "Power Outler",
  "Adaptor",
  "Dimmer",
  "Power Cord",
  "Remote & Screws",
];
