import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex w-full justify-between items-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div></div>
        <div className="flex justify-center items-center p-3 gap-3">
          <h1 className="font-bold text-3xl">Gopal Dawar</h1>
          <p className="bg-white w-10 h-10 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default Header;
