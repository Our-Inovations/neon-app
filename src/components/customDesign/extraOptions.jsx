import { useDispatch, useSelector } from "react-redux";
import {
  updateBackingColor,
  updateOptionSecondary,
} from "../../../store/customNeonSplice";

export default function ExtraOptions() {
  const backingSelected = useSelector(
    (state) => state.customReducer.backingColor
  );
  const secondOption = useSelector(
    (state) => state.customReducer.optionSecondary
  );

  const dispatch = useDispatch();

  return (
    <div className="my-8">
      <h2 className="customh2">Backing Color</h2>
      <div className="inline-block sm:space-x-2 bg-black text-white gap-4 px-1 py-1 sm:px-2 sm:py-2 rounded-full">
        {backingOptions.map((bcOp) => (
          <button
            key={bcOp}
            className={`backingButtons ${
              bcOp.toLowerCase() === backingSelected.toLowerCase()
                ? "bg-pink"
                : "bg-transparent"
            }`}
            onClick={() => dispatch(updateBackingColor(bcOp))}
          >
            {bcOp}
          </button>
        ))}
      </div>
      <div className="inline-flex sm:space-x-2 bg-black rounded-full mt-8 sm:px-2 sm:py-2 px-1 py-1 text-white justify-between">
        {otherOption.map((item) => (
          <button
            key={item}
            className={`backingButtons ${
              secondOption.toLowerCase() === item.toLowerCase()
                ? "bg-pink"
                : "bg-transparent"
            }`}
            onClick={() => dispatch(updateOptionSecondary(item))}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

const backingOptions = ["Clear Acrylic", "White", "Black"];
const otherOption = ["Text Shape", "Rectangle", "Invisible"];
