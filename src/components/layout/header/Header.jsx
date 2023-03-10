import React, { useEffect, useRef, useState } from "react";
import Menu, { MobMenu } from "./menu";
import { Icon } from "@iconify/react";
import MegaMenu from "./megaMenu";
import { useDispatch, useSelector } from "react-redux";
import { updateOpener } from "../../../../store/menuSplice";
import CartDrawer from "../../cart/cartDrawer";
import { Link } from "react-router-dom";

function Header() {
  const openMenu = useSelector((state) => state.menuReducer);
  const menuRef = useRef(null);
  const menuBtnRef = useRef(null);
  const dispatch = useDispatch();
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.cartReducer.itemsInCart);
  const cartRef = useRef(null);
  const cartIconRef = useRef(null);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  useEffect(() => {
    const handleCartClick = (event) => {
      if (
        cartRef.current &&
        !cartRef.current.contains(event.target) &&
        cartIconRef.current &&
        !cartIconRef.current.contains(event.target)
      ) {
        setCartOpen(false);
      }
    };
    document.addEventListener("click", handleCartClick);
    return () => document.removeEventListener("click", handleCartClick);
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        dispatch(updateOpener(false));
      }
    };
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [openMenu]);

  return (
    <div className="relative">
      <div style={{ width: '100%', height: '25px', background: '#FF00B4', display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="flex text-white font-sans font-[600] text-[8px] sm:text-[12px] items-center" >
          <Icon
            icon="fe:truck"
            style={{ fontSize: "20px", marginRight: '5px' }}

          />
          <p className="text-white font-sans font-[600] text-[12px]" >FREE SHIPPING - ALL SIGNS! </p>
        </div>
        <div className="hidden sm:flex  text-white font-sans font-[600] text-[12px] items-center ml-[20px]" >
          <Icon
            icon="mdi:shield-check-outline"
            style={{ fontSize: "20px", marginRight: '5px' }}

          />
          <p className="text-white font-sans font-[600] text-[12px]" >2 YEAR WARRANTY</p>
        </div>
      </div>
      <div className="flex justify-evenly bg-black text-white h-20 px-10">
        <div className="flex-1 lg:inline-flex hidden">
          <Menu passRef={menuBtnRef} />
        </div>
        <div className="lg:hidden flex-1 flex items-center">
          <MobMenu />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Link to={"/"}>
            <img src="./Logo.png" alt="Neon Logo" className="h-16 w-auto" />
          </Link>
        </div>
        <div
          className="flex flex-1 justify-end gap-4 items-center relative"
          style={{ fontSize: "28px" }}
        >
          <Icon icon="ph:magnifying-glass-bold" style={{ cursor: "pointer" }} />
          {cartItems.length === 0 && (
            <Icon
              ref={cartIconRef}
              icon="ph:bag"
              style={{ cursor: "pointer" }}
              onClick={toggleCart}
            />
          )}
          {cartItems.length > 0 && (
            <Icon
              icon="ion:bag-check-sharp"
              style={{ cursor: "pointer" }}
              onClick={toggleCart}
              ref={cartIconRef}
            />
          )}
        </div>
      </div>
      {openMenu && <MegaMenu passRef={menuRef} />}
      <CartDrawer
        items={cartItems}
        total={cartItems}
        isOpen={cartOpen}
        onClose={toggleCart}
        cartRef={cartRef}
      />
    </div>
  );
}

export default Header;
