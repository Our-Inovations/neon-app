import img from "../../assets/prem.png";

export default function PremiumColor() {
  return (
    <div className="my-8">
      <h2 className="text-lg font-bold text-pink mb-4">
        Premium RGB color changing
      </h2>
      <p>Multiple colors with static and dynamic modes</p>
      <div className="mx-4 my-6">
        <p>
          RGB provides a wide range of colors and modes with an advanced remote
          control. White when off.
        </p>
        <img src={img} alt="premium Images" className="my-2" />
        <span>
          More Photos:{" "}
          <a className="text-[#0095D6]" href="">
            See RGB color changing
          </a>
        </span>
      </div>
    </div>
  );
}
