import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-sky-300 p-3">
      <div>
        <h1 className="text-3xl font-bold text-black">
          Vehicle Registration System
        </h1>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <h1 className="text-black font-bold">Gopal Dawar</h1>
        <p className="w-10 h-10 rounded-full bg-gray-800"></p>
      </div>
    </div>
  );
};

export default Header;
