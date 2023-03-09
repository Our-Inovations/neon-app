import img from "../../assets/gallery/img1.jpg";

export default function CartProduct(props) {
  
  return (
    <div className="flex gap-4">
      <div className="w-40 h-auto">
        <img src={
          props.name ?
          'https://admin.pickaneon.com/'+props.img : props.img} alt="product Image" className="rounded-lg" />
      </div>
      <div className="flex flex-col justify-between py-2">
        <h3 className="font-bold">{props.name || props.title}</h3>
       {props.color && <p className="font-bold">
          Color: <span className="font-normal">{props.color}</span>
        </p>}
        <p className="font-bold text-pink text-lg">${props.price}</p>
      </div>
    </div>
  );
}
