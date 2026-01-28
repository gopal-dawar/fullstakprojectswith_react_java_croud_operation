import React, { useState } from "react";
import { addEmployee } from "../../api";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    salary: 0,
    department: "",
  });

  function formhandling(e) {
    e.preventDefault();

    const addData = async () => {
      try {
        await addEmployee(employee);
        alert("Successfully Added");
      } catch (error) {
        console.error("Error while adding employee:", error);
        alert("Failed to add employee");
      }
    };

    addData();
  }

  return (
    <div>
      <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
        <form
          onSubmit={(e) => {
            formhandling(e);
          }}
          className="w-1/4 bg-white p-3 "
        >
          <h1 className="w-full text-center p-3">Login Form</h1>
          <input
            className="w-full p-2 shadow px-3 my-3"
            type="text"
            placeholder="Enter Name"
            value={employee.name}
            onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
          />
          <input
            className="w-full p-2 shadow px-3 my-3"
            type="text"
            placeholder="designation"
            value={employee.designation}
            onChange={(e) =>
              setEmployee({ ...employee, designation: e.target.value })
            }
          />
          <input
            className="w-full p-2 shadow px-3 my-3"
            type="number"
            placeholder="salary"
            value={employee.salary}
            onChange={(e) =>
              setEmployee({ ...employee, salary: e.target.value })
            }
          />
          <input
            className="w-full p-2 shadow px-3 my-3"
            type="text"
            placeholder="department"
            value={employee.department}
            onChange={(e) =>
              setEmployee({ ...employee, department: e.target.value })
            }
          />
          <div className="flex justify-center gap-3 mt-4">
            <input
              type="reset"
              placeholder="Cancel"
              className="bg-blue-600 hover:bg-blue-800 px-3 py-2 text-white"
            />
            <input
              type="submit"
              placeholder="Submit"
              className="bg-blue-600 hover:bg-blue-800 px-3 py-2 text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
