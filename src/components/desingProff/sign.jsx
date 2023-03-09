import { useSelector } from "react-redux";

export default function YourSign({ message, selectedColor, selectedFont }) {
  return (
    <div className="my-10">
      <h3 className="text-xl font-bold text-pink">Your sign</h3>
      <div className="mt-6">
        <p>{message}</p>
        <p className="font-bold">
          Color: <span className="font-normal">{selectedColor}</span>
        </p>
        <p className="font-bold">
          Font: <span className="font-normal">{selectedFont}</span>
        </p>
        <p className="font-bold">
          Material:{" "}
          <span className="font-normal">
            High-quality LED neon flex - Indoor use
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
