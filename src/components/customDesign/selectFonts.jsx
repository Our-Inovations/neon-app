import { useSelector, useDispatch } from "react-redux";
import { updateDesignFont } from "../../../store/customNeonSplice";

export default function SelectFont() {
  const selectedFont = useSelector((state) => state.customReducer.selectedFont);

  const dispatch = useDispatch();

  return (
    <div className="my-8">
      <h2 className="text-lg font-bold text-pink mb-4">Select Your Fonts</h2>
      <div className="flex gap-2 flex-wrap ">
        {fonts.map((font, i) => (
          <div
            key={i}
            className={`flex items-center justify-center w-32 h-14 border-2 ${
              selectedFont === font.family ? "border-pink" : "border-[#495057]"
            } rounded-lg cursor-pointer`}
            onClick={() => dispatch(updateDesignFont(font.family))}
          >
            <h3>
              {i + 1}. <span>{font.name}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

const fonts = [
  { name: "Alexa", family: "font-alexa" },
  { name: "Amanda", family: "font-amanda" },
  { name: "Amsterdam", family: "font-amsterdam" },
  { name: "Avante", family: "font-avante" },
  { name: "Barcelone", family: "font-barcelone" },
  { name: "Bayview", family: "font-bayview" },
  { name: "Beachfront", family: "font-beachfront" },
  { name: "Buttercup", family: "font-buttercup" },
  { name: "Chelsea", family: "font-chelsea" },
  { name: "Classic Type", family: "font-classicType" },
  { name: "Freehand", family: "font-freehand" },
  { name: "Freespirit", family: "font-freespirit" },
  { name: "Greenworld", family: "font-greenworld" },
  { name: "Loveneon", family: "font-loveneon" },
  { name: "Monaco", family: "font-monaco" },
  { name: "Neonscript", family: "font-neonscript" },
  { name: "Neotokyo", family: "font-neotokyo" },
  { name: "Newcursive", family: "font-newcursive" },
  { name: "Northshore", family: "font-northshore" },
  { name: "Photogenic", family: "font-photogenic" },
  { name: "Rocket", family: "font-rocket" },
  { name: "Royalty", family: "font-royalty" },
  { name: "SciFI", family: "font-sciFI" },
  { name: "Signature", family: "font-signature" },
  { name: "sorrento", family: "font-sorrento" },
  { name: "Venetian", family: "font-venetian" },
  { name: "Vintage", family: "font-vintage" },
  { name: "Waikiki", family: "font-waikiki" },
];
