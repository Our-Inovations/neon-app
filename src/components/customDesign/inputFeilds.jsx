import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import {
  updateInputMessage,
  updateAlignment,
  updateFontSize,
  updatePrice,
} from "../../../store/customNeonSplice";

export default function CustomNeonInputFields() {
  const inputFieldsNumbers = useSelector(
    (state) => state.customReducer.inputFields
  );
  const inputFontSize = useSelector((state) => state.customReducer.fontSize);

  const inputValue1 = useSelector((state) => state.customReducer.inputField1);
  const inputValue2 = useSelector((state) => state.customReducer.inputField2);
  const inputValue3 = useSelector((state) => state.customReducer.inputField3);

  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    dispatch(
      updateInputMessage({ name: e.target.name, value: e.target.value })
    );
    dispatch(updatePrice());
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mt-4">
      <div className="flex flex-col  flex-1">
        {inputFieldsNumbers.map((num) => (
          <input
            key={num}
            type="text"
            name={`inputField${num}`}
            placeholder="custom"
            className="border rounded-sm px-2 py-1 focus:outline-pink"
            onChange={handleInputChange}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 justify-evenly">
        <div className="flex items-center justify-between gap-4">
          <h2>Sign Align: </h2>
          <div className="flex gap-3">
            <button
              className="bg-pink px-3 py-1 rounded-full text-white text-lg cursor-pointer"
              onClick={() => dispatch(updateAlignment("text-left"))}
            >
              <Icon icon="material-symbols:arrow-back-ios-rounded" />
            </button>
            <button
              onClick={() => dispatch(updateAlignment("text-center"))}
              className="px-3 py-1 bg-black text-white text-lg rounded-full cursor-pointer"
            >
              <Icon icon="charm:menu-hamburger" />
            </button>
            <button
              onClick={() => dispatch(updateAlignment("text-right"))}
              className="bg-pink px-3 py-1 rounded-full text-white text-lg cursor-pointer"
            >
              <Icon icon="material-symbols:arrow-forward-ios-rounded" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h2>Size Font: </h2>
          <div className="flex gap-3">
            <button
              onClick={() => dispatch(updateFontSize(inputFontSize + 4))}
              className="bg-black text-xl px-4 py-1 rounded-full text-white"
            >
              +
            </button>
            <button
              onClick={() => dispatch(updateFontSize(inputFontSize - 4))}
              className="bg-black text-xl px-4 py-1 rounded-full text-white"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
