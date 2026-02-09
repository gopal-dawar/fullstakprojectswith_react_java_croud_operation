import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      
      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Welcome to Account Manager
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-medium text-gray-700">
          Gopal Dawar
        </h1>

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
          G
        </div>
      </div>

    </header>
  );
};

export default Header;
