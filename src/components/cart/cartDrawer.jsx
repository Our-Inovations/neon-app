import React from "react";
import Cart from "./Cart";

const CartDrawer = ({ items, total, isOpen, onClose, cartRef }) => {
  return (
    <div
      ref={cartRef}
      className={` cart-drawer absolute  top-20  right-0 z-50 w-full md:w-1/3 bg-white transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <Cart items={items} total={total} toggle={onClose} />
    </div>
  );
};

export default CartDrawer;
