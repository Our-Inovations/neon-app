import AccessoryBox from "./accessoryBox";

export default function Accessories() {
  return (
    <div className="my-8">
      <h2 className="customh2">Accessories</h2>
      <div className="flex flex-wrap gap-2">
        {accessories.map((acc) => (
          <AccessoryBox key={acc.id} {...acc} />
        ))}
      </div>
    </div>
  );
}
const accessories = [
  {
    title: "Wall-Mounting-Kit",
    price: "0.00",
    borderColor: "border-pink",
    id: "Ac-98",
  },
  { title: "Hanging-Kit", price: "10.00", id: "AC-97" },
  { title: "Stand", price: "10.00", id: "AC-99" },
  { title: "Rush Order", price: "50.00", id: "AC-96" },
  { title: "Outdoor-User", price: "10.00", id: "AC-95" },
];
