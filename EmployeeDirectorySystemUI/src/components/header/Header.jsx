import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-10 items-center p-2 bg-sky-600">
        <h1 className="text-3xl font-bold text-white ">
          Employee Directory System
        </h1>
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-white font-bold text-2xl">Gopal Dawar</h1>
          <p className=" w-10 rounded-full h-10 bg-gray-500"></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
