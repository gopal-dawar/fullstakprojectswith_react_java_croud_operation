import React, { lazy, useEffect, useState } from "react";
import { deleteById, viewEmployee } from "../../api";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const re = await viewEmployee();
      setEmployees(re);
    };
    fetchData();
  }, []);

  const removeData = async (id) => {
    const re = await viewEmployee();
    await deleteById(id);
    alert("successfully Deleted");
    setEmployees(re);
  };

  return (
    <div className="w-full min-h-screen bg-gray-200 p-6">
      <div className="bg-white shadow rounded-lg p-4">
        <h1 className="text-xl font-semibold mb-4 text-center">
          Employee List
        </h1>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Designation</th>
              <th className="p-3 text-left">Department</th>
              <th className="p-3 text-left">Salary</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((data, id) => {
              return (
                <tr className="border-b hover:bg-gray-100">
                  <td className="p-3">{id + 1}</td>
                  <td className="p-3">{data.name}</td>
                  <td className="p-3">{data.designation}</td>
                  <td className="p-3">{data.department}</td>
                  <td className="p-3">{data.salary}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => navigate(`/updatesalary/${data.id}`)}
                      className="bg-green-600 hover:bg-green-800 text-white px-3 py-1 mr-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeData(data.id)}
                      className="bg-red-600 hover:bg-red-800 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
