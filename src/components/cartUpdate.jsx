import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AddedToCart() {
  const [open, setOpen] = useState(false);
  const [clicked, setCicked] = useState(false);
  const cartItems = useSelector((state) => state.cartReducer.itemsInCart);

  useEffect(() => {
    if (cartItems.length > 0) {
      setOpen(true);
    }
    const timer = setTimeout(() => {
      setOpen(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [cartItems]);
  return (
    <div
      className={`fixed top-5 right-5 bg-pink/90 text-white px-4 py-2 rounded-sm transition-all duration-300 ${
        open ? "translate-x-0" : "translate-x-[140%]"
      }`}
    >
      Successfully Added to Cart
    </div>
  );
}
