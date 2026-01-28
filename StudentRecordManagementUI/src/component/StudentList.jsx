import React, { useEffect, useState } from "react";
import { removeStudent, studentlist } from "./api";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const re = await studentlist();
      setData(re.data);
    };
    fetchdata();
  }, []);

  const deleteData = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    await removeStudent(id);
    
    const re = await studentlist();
    setData(re.data);
  };

  return (
    <div>
      <div>
        {data.length > 0 ? (
          <table className="w-full bg-white border-1">
            <tr className="p-2 border-1">
              <td>Name</td>
              <td>Email</td>
              <td>Course</td>
              <td>Marks</td>
              <td>Action</td>
            </tr>
            {data.map((d, idx) => {
              return (
                <tr key={idx}>
                  <td className="border-l-1 p-1">{d.name}</td>
                  <td className="border-l-1 p-1">{d.email}</td>
                  <td className="border-l-1 p-1">{d.course}</td>
                  <td className="border-l-1 p-1">{d.marks}</td>
                  <td className="border-l-1 p-1">
                    <button
                      onClick={() => navigate(`/updatestudentbyid/${d.id}`)}
                      className="bg-blue-400 p-1 text-white m-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteData(d.id)}
                      className="p-1 text-white m-1 bg-red-500 "
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        ) : (
          <p>Data Not Found</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
