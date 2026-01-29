import React from "react";

const Header = () => {
  return (
    <header className="bg-primary flex justify-end items-center px-6 py-4 shadow-md">
      <img
        src='/dlux-logo.png'
        alt="DLUX Logo"
        className="w-[150px] h-16 object-contain transform scale-125"
      />
    </header>
  );
};

export default Header;
