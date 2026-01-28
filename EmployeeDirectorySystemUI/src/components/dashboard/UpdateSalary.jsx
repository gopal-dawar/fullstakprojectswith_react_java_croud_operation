import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getById, updateById } from "../../api";

const UpdateSalary = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    const fetchdata = async () => {
      const re = await getById(id);
      setData(re);
    };
    fetchdata();
  }, [id]);

  function formhandling(e) {
    e.preventDefault();

    const newData = async () => {
      await updateById(id, data);
      alert("Data Successfully Updated!");
      navigate("/employeelist");
    };
    newData();
  }
  return (
    <div className="w-full h-screen bg-gray-400 flex justify-center items-center">
      <form
        onSubmit={(e) => formhandling(e)}
        className="w-1/4 bg-white p-4 rounded shadow"
      >
        <h1 className="w-full text-center p-3 text-xl font-semibold">
          Update Employee
        </h1>

        <input
          className="w-full p-2 shadow px-3 my-3"
          type="text"
          placeholder="Update Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          className="w-full p-2 shadow px-3 my-3"
          type="text"
          placeholder="Update Designation"
          value={data.designation}
          onChange={(e) => setData({ ...data, designation: e.target.value })}
        />

        <input
          className="w-full p-2 shadow px-3 my-3"
          type="number"
          placeholder="Update Salary"
          value={data.salary}
          onChange={(e) => setData({ ...data, salary: e.target.value })}
        />

        <input
          className="w-full p-2 shadow px-3 my-3"
          type="text"
          placeholder="Update Department"
          value={data.department}
          onChange={(e) => setData({ ...data, department: e.target.value })}
        />

        <div className="flex justify-center gap-3 mt-4">
          <input
            type="reset"
            className="bg-gray-500 hover:bg-gray-700 px-4 py-2 text-white rounded"
          />

          <input
            type="submit"
            className="bg-green-600 hover:bg-green-800 px-4 py-2 text-white rounded"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateSalary;
