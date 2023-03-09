import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.jpg";
import designCustom from "../../assets/vectors/design.png";
import energy from "../../assets/vectors/light.png";
import muscle from "../../assets/vectors/muscle.png";
import hand from "../../assets/vectors/hand.png";

export const featureDataWithImg = [
  {
    img: Img1,
    title: "Online Designer",
    bgColor: "bg-yellow",
  },
  {
    img: Img2,
    title: "Business and Logos",
    bgColor: "bg-pink",
    scale: "scale-110",
  },
  { img: Img3, title: "Our Store", bgColor: "bg-[#00EB70]" },
];

export const featuresContent = [
  {
    imgSource: designCustom,
    title: "Custom Designed",
    desc: "Each LED neon sign or artwork is designed in-house by our professional designers.",
  },
  {
    imgSource: energy,
    title: "Energy & Cost Efficient",
    desc: "Low energy consumption, 100,000+ hour lifespan, no heat or noise.",
  },
  {
    imgSource: muscle,
    title: "Durable",
    desc: "Latest neon flex technology which is stronger & lighter than glass neon tubes.",
  },
  {
    imgSource: hand,
    title: "Easy To Install",
    desc: "Our high quality backboards feature pre-drilled holes for easy wall mounting & hanging.",
  },
];
