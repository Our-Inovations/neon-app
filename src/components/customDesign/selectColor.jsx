import { Icon } from "@iconify/react";
import flash from "../../assets/vectors/flash-outline.svg";
import FlashSvg from "./flashSvg";
import { useSelector, useDispatch } from "react-redux";
import { updateColor } from "../../../store/customNeonSplice";

export default function SelectColor() {
  const selected = useSelector((state) => state.customReducer.selectedColor);
  const dispatch = useDispatch();

  return (
    <div className="my-8">
      <h2 className="text-lg font-bold text-pink mb-4">Select Color</h2>
      <div className="flex justify-between mt-6 mx-2 flex-wrap">
        {colors.map((clr, i) => (
          <div
            key={i}
            style={{
              textShadow: `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, ${clr} 0px 0px 8px, ${clr} 0px 0px 12px, ${clr} 0px 0px 16px, ${clr} 0px 0px 22px, ${clr} 0px 0px 30px`,
              color: clr,
              fontSize: "60px",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => dispatch(updateColor(clr))}
          >
            {selected === clr && (
              <span className="absolute -top-10 left-3">.</span>
            )}

            <FlashSvg
              clr={clr}
              textShadowProp={
                clr === selected
                  ? `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, ${clr} 0px 0px 8px, ${clr} 0px 0px 12px, ${clr} 0px 0px 16px, ${clr} 0px 0px 22px, ${clr} 0px 0px 30px`
                  : ""
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}
{
  /* <Icon
              icon="jam:thunder"
              style={{
                color: `${clr === selected ? "white" : clr}`,
                fontSize: "3rem",
                cursor: "pointer",
                textShadow: `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 144, 255) 0px 0px 8px, rgb(255, 144, 255) 0px 0px 12px, rgb(255, 144, 255) 0px 0px 16px, rgb(255, 144, 255) 0px 0px 22px, rgb(255, 144, 255) 0px 0px 30px`,
                // textShadow: `${
                //   clr === selected
                //     ? `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 144, 255) 0px 0px 8px, rgb(255, 144, 255) 0px 0px 12px, rgb(255, 144, 255) 0px 0px 16px, rgb(255, 144, 255) 0px 0px 22px, rgb(255, 144, 255) 0px 0px 30px`
                //     : "white"
                // }`,
                // clr === selected
                //   ? `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 4px, rgb(255, 144, 255) 0px 0px 8px, rgb(255, 144, 255) 0px 0px 12px, rgb(255, 144, 255) 0px 0px 16px, rgb(255, 144, 255) 0px 0px 22px, rgb(255, 144, 255) 0px 0px 30px`
                //   : "",
                // background: `${
                //   clr === selected
                //     ? "radial-gradient(circle, rgba(255,0,180,1) 0%, rgba(255,255,255,1) 68%, rgba(255,255,255,1) 84%, rgba(255,255,255,1) 100%)"
                //     : "white"
                // }`,
              }} */
}

const colors = [
  "#FF00B4",
  "#FAEB08",
  "#FFA101",
  "#0003F3",
  "#FF90FF",
  "#5ADFE1",
  "#01B8FF",
  "#08E94F",
  "#F4051C",
  "#A101DD",
  "#FD0192",
];
