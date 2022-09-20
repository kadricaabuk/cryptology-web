import React from "react";
import Popper from "popper.js";
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Affine Chipher', href: '/affine', current: false },
    { name: 'Ceasar Chipher', href: '/ceasar', current: false },
    { name: 'Substitution Chipher', href: '/substitution', current: false },
    { name: 'Hill Chipher', href: '/hill', current: false },
    { name: 'Permutation Chipher', href: '/permutation', current: false },
    { name: 'Autokey Vigenere Chipher', href: '/vigenere', current: false },
]
  

const Dropdown = ({ color }) => {
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  
  const openDropdownPopover = () => {
    new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  // bg colors
  let bgColor;
  color === "white"
    ? (bgColor = "bg-gray-800")
    : (bgColor = "bg-" + color + "-500");
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <button
              className={classNames(
                "text-gray-300 outline-none mt-2",
                "focus:outline-none mr-1 mb-1 hover:text-white hover:bg-gray-700",
                "px-3 py-2 rounded-md text-[12px] font-bold"
              )}
              style={{ transition: "all .15s ease" }}
              type="button"
              ref={btnDropdownRef}
              onMouseOver={() => openDropdownPopover()}
            >
              Methods
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
              }
              style={{ minWidth: "12rem" }}
              onMouseLeave={() => closeDropdownPopover()}
            >
              {navigation.map((item) => (
                <Link
                  to={item.href}
                  key={item.name}
                  className={
                    "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent hover:font-bold"
                  }
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function DropdownRender() {
  return (
    <>
      <Dropdown color="white" />
    </>
  );
}
