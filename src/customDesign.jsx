import { useEffect, useState } from "react";
import CustomImg from "./assets/back1.jpeg";
import CustomNeonInputFields from "./components/customDesign/inputFeilds";
import { useDispatch, useSelector } from "react-redux";
import {
  updateInputNums,
  updateNeonLenght,
  updateImgGenerated,
} from "../store/customNeonSplice";
import SelectFont from "./components/customDesign/selectFonts";
import SelectColor from "./components/customDesign/selectColor";
import PremiumColor from "./components/customDesign/premiumColor";
import ExtraOptions from "./components/customDesign/extraOptions";
import Accessories from "./components/customDesign/accessories";
import Imagination from "./components/customDesign/imagination";
import Faqs from "./components/customDesign/FaQs";
import { useNavigate } from "react-router-dom";
import ScrollToTopOnMount from "./components/scrolltoTop";
import * as htmlToImage from "html-to-image";

export default function CustormDesign() {
  const navigate = useNavigate();
  const selectedFont = useSelector((state) => state.customReducer.selectedFont);
  const inputFieldsNumbers = useSelector(
    (state) => state.customReducer.inputFields
  );
  const lenghtOfWords = useSelector(
    (state) => state.customReducer.lengthofNeonWord
  );

  const inputFieldMessage = useSelector(
    (state) => state.customReducer.inputField1
  );
  const inputField2Message = useSelector(
    (state) => state.customReducer.inputField2
  );
  const inputField3Message = useSelector(
    (state) => state.customReducer.inputField3
  );
  const customTextAlignment = useSelector(
    (state) => state.customReducer.alignment
  );
  const selectedColor = useSelector(
    (state) => state.customReducer.selectedColor
  );
  const customFontSize = useSelector((state) => state.customReducer.fontSize);
  const calculatedPrice = useSelector(
    (state) => state.customReducer.totalPrice
  );
  const dispatch = useDispatch();

  const convertHtmlTOPng = (e) => {
    e.preventDefault();
    const node = document.querySelector(".customImgBox");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        const setImg = new Image();
        setImg.src = dataUrl;
        dispatch(updateImgGenerated(dataUrl));
        navigate("/design-proff");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const length =
      inputFieldMessage.length +
      inputField2Message.length +
      inputField3Message.length;
    dispatch(updateNeonLenght(length));
  }, [inputFieldMessage, inputField2Message, inputField3Message]);

  return (
    <div className="my-16">
      <ScrollToTopOnMount />
      <h2 className="text-4xl text-pink text-center font-bold mb-16">
        Design Your Own Neon
      </h2>
      <div className="flex flex-col items-center lg:flex-row md:items-stretch gap-8 px-10">
        <div className="flex-1">
          <div className="relative">
            <img
              src={CustomImg}
              alt="design your own neon section"
              className="w-full lg:w-11/12"
            />

            <div
              className={`${customTextAlignment} ${selectedFont} absolute top-40 w-5/6  -translate-y-1/2 left-1/2 -translate-x-[50%] z-20 text-white`}
              style={{
                fontSize: `${customFontSize}px`,
                textShadow: `rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, ${selectedColor} 0px 0px 20px, ${selectedColor} 0px 0px 30px, ${selectedColor} 0px 0px 40px, ${selectedColor} 0px 0px 55px, ${selectedColor} 0px 0px 75px`,
              }}
            >
              <div className="customImgBox">
                <h2>{inputFieldMessage}</h2>
                {inputFieldsNumbers.length >= 2 && (
                  <h2>{inputField2Message}</h2>
                )}
                {inputFieldsNumbers.length === 3 && (
                  <h2>{inputField3Message}</h2>
                )}
              </div>
            </div>

        
          </div>
        </div>
        <div className="flex-1">
          <ul className="bg-black flex text-white gap-10 px-4 py-4 rounded-t-3xl cursor-pointer">
            <li onClick={() => dispatch(updateInputNums([1]))}>One Line</li>
            <li onClick={() => dispatch(updateInputNums([1, 2]))}>Two Line</li>
            <li onClick={() => dispatch(updateInputNums([1, 2, 3]))}>
              Three line
            </li>
          </ul>
          <div className="px-4">
            <CustomNeonInputFields />
            <SelectFont />
            <SelectColor />
            <PremiumColor />
            <ExtraOptions />
            <Accessories />
            <div className="bg-[#EFEFEF] px-4 py-2 flex justify-between rounded-lg mb-3">
              <p>Total with selected options:</p>
              <h3 className="font-bold text-pink">$ {calculatedPrice}</h3>
            </div>

            <button
              className={`block  text-center  text-white rounded-full w-full py-3 ${
                lenghtOfWords === 0
                  ? "cursor-not-allowed bg-pink/40"
                  : "bg-pink"
              }`}
              onClick={ lenghtOfWords === 0 ? ()=>{} : convertHtmlTOPng}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="my-20">
        {/* <StepsSection /> */}
        <Imagination />
      </div>
    </div>
  );
}
