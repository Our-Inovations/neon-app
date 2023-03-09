import BackBoard from "./components/desingProff/backBorad";
import Dimentions from "./components/desingProff/dimentions";
import InBox from "./components/desingProff/inBox";
import YourSign from "./components/desingProff/sign";
import proff from "./assets/proff/proff1.png";
import { useSelector } from "react-redux";
import ScrollToTopOnMount from "./components/scrolltoTop";

export default function DesignProff() {
  const selectedFont = useSelector((state) => state.customReducer.selectedFont);
  const imgGenerated = useSelector((state) => state.customReducer.imgGenerated);

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
  const backingSelected = useSelector(
    (state) => state.customReducer.backingColor
  );
  const secondOption = useSelector(
    (state) => state.customReducer.optionSecondary
  );
  const totalPrice = useSelector((state) => state.customReducer.totalPrice);
  const customFontSize = useSelector((state) => state.customReducer.fontSize);

  return (
    <div className="my-16">
      <ScrollToTopOnMount />
      <h2 className="text-3xl md:text-4xl text-pink text-center font-bold mb-16">
        Design Proff
      </h2>
      <div className="md:w-8/12 px-4 mx-auto my-10">
        <div
          style={{
            fontSize: `${customFontSize}px`,
            color: "white",
            textShadow: `rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, ${selectedColor} 0px 0px 20px, ${selectedColor} 0px 0px 30px, ${selectedColor} 0px 0px 40px, ${selectedColor} 0px 0px 55px, ${selectedColor} 0px 0px 75px`,
          }}
          className={`flex justify-center h-48 w-auto ${selectedFont}`}
        >
          <h2>
            {inputFieldMessage && <h2>{inputFieldMessage}</h2>}
            {inputField2Message && <h2>{inputField2Message}</h2>}
            {inputField3Message && <h2>{inputField3Message}</h2>}
          </h2>
        </div>
        <YourSign
          message={[inputFieldMessage, inputField2Message, inputField3Message]}
          selectedColor={selectedColor}
          selectedFont={selectedFont}
        />
        <Dimentions />
        <BackBoard backSelected={backingSelected} otherPara={secondOption} />
        <InBox
          calculatedPrice={totalPrice}
          color={selectedColor}
          messages={[inputFieldMessage, inputField2Message, inputField3Message]}
          imgGenerated={imgGenerated}
        />
      </div>
    </div>
  );
}
