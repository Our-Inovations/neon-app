export default function FeatureCustomCard({ title, icon, desc }) {
  return (
    <div className="w-72 flex flex-col items-center px-10 py-4  shadow-md rounded-lg bg-white">
      <div className="mb-4  w-20 h-20 flex items-center justify-center bg-black rounded-full ">
        <img src={icon} className="w-6/12" alt={`pick a neon ${title} icon`} />
      </div>
      <h2 className="text-xl text-center font-bold mb-6">{title}</h2>
      <p>{desc}</p>
    </div>
  );
}
