import React ,{useState,useEffect}from "react";
import { Link } from "react-router-dom";

const Cart = ({ items, total, toggle }) => {


  const [totalPrice , settotalPrice] = useState('')

function addPrice(params) {
  var prize = 0
for (let i = 0; i < items.length; i++) {
 prize = +(prize) + +(items[i].price)
  
}settotalPrice(prize)
}

useEffect(() => {
  addPrice()
}, [total])


  return (
    <div className="px-8 py-10 h-[90vh] gap-8 flex flex-col justify-between">
      <h2 className="text-xl font-bold">Your Cart</h2>
      <div className="flex-1 flex gap-2 flex-col overflow-y-auto">
        {items.map((item, i) => (
          <div className="flex gap-6 items-center" key={i + 109}>
            <div className="h-28 w-28">
              <img src={ item.name? 'https://admin.pickaneon.com/'+item.img : item.img} alt={item.name} className="rounded-xl" />
            </div>
            <div className="flex flex-col justify-between">
              <h4 className="font-bold mb-6">
                {
                // item.customText[0] ? item.title :
                item.name ?? item.title}</h4>
              <p className="text-lg">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p className="flex justify-between text-lg">
          Total: <span className="font-bold text-pink text-2xl">$ {totalPrice}</span>
        </p>

        <Link
          to={items.length > 0 && "/checkout"}
          className={` py-2 text-center rounded-full text-white ${
            items.length > 0 ? "bg-pink" : "bg-[#adb5bd] cursor-not-allowed	"
          }`}
          onClick={() => toggle()}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
