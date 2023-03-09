import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { updateOpener } from "../../../../store/menuSplice";
import { Link } from "react-router-dom";

function Menu(props) {
  const openMenu = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  return (
    <ul className="flex  gap-6 items-center shrink">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li
        className="flex items-center cursor-pointer"
        onClick={() => dispatch(updateOpener(!openMenu))}
        ref={props.passRef}
      >
        Collections
        <Icon
          icon="material-symbols:keyboard-arrow-down-rounded"
          style={{ fontSize: "24px" }}
          className={` ${
            openMenu ? "rotate-180" : "rotate-0"
          } duration-200 ease-out`}
        />
      </li>
      <li>
        <Link to={"/custom-design"}>Design Your Own Neon</Link>
      </li>
    </ul>
  );
}

export function MobMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const iconRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        iconRef.current &&
        !iconRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="">
      <Icon
        icon={
          openMenu ? "mdi:hamburger-menu-back" : "radix-icons:hamburger-menu"
        }
        className="text-2xl cursor-pointer"
        onClick={handleMenuOpen}
        ref={iconRef}
      />
      {openMenu && (
        <div className="menuDrawer" ref={menuRef}>
          <ul className="absolute z-10 bg-black  flex flex-col  gap-8 px-6 py-10  left-0 top-20 shrink">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li className="flex items-center cursor-pointer">
              <Link to={"/collections"}>Collections</Link>
            </li>
            <li>
              <Link to={"/custom-design"}>Design Your Own Neon</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Menu;
