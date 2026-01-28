import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-50 bg-sky-400 py-3">
        <div>
          <h1 className="font-bold text-3xl text-white">Library Book Catlog</h1>
        </div>
        <div>
          <div className="flex justify-cente items-center gap-x-3">
            <h1 className="font-bold text-2xl text-white">Gopal Dawar</h1>
            <p className="bg-gray-300 w-10 h-10 rounded-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
