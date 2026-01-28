import React, { useEffect, useState } from "react";
import { searchEmployee } from "../../api";

const SearchByName = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const re = await searchEmployee(search);
      setData(re);
    };
    fetchdata();
  }, [search]);

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-5">
        {/* Search Input */}
        <input
          type="search"
          placeholder="Search employee by name..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md 
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {/* Result List */}
        <ul className="mt-4 space-y-2">
          {data.map((da) => {
            return (
              <div className="flex gap-3 bg-blue-400 p-2">
                <li>{da.name}</li>
                <li>{da.designation}</li>
                <li>{da.salary}</li>
                <li>{da.department}</li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchByName;
