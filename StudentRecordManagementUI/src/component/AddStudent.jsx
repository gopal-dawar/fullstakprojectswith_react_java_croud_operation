import React, { useState } from "react";
import { addStudent } from "./api";

const AddStudent = () => {
  const studentfield = {
    name: "",
    email: "",
    course: "",
    marks: 0,
  };
  const [student, setStudent] = useState(studentfield);
  // console.log(student);

  function formhandling(e) {
    e.preventDefault();

    if (!student.name || !student.email || !student.course || !student.marks) {
      alert("All fileds are required");
      return;
    } else {
      addStudent(student);
      alert("Successfull Added!");
      setStudent(studentfield);
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-2/3 max-w-md bg-white flex gap-4 flex-col justify-center">
        <form
          onSubmit={(e) => formhandling(e)}
          className="text-center p-3 w-full"
        >
          <input
            className="shadow w-full m-3 px-3 py-2 outline-0"
            type="text"
            placeholder="Full Name"
            value={student.name}
            onChange={(e) => setStudent({ ...student, name: e.target.value })}
          />
          <input
            className="shadow w-full m-3 px-3 py-2 outline-0"
            type="email"
            placeholder="Enter Email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          />
          <input
            className="shadow w-full m-3 px-3 py-2 outline-0"
            type="text"
            placeholder="Course"
            value={student.course}
            onChange={(e) => setStudent({ ...student, course: e.target.value })}
          />
          <input
            className="shadow w-full m-3 px-3 py-2 outline-0"
            type="number"
            placeholder="Enter Mark"
            value={student.marks}
            onChange={(e) => setStudent({ ...student, marks: e.target.value })}
          />
          <button className="hover:bg-blue-500 bg-blue-800 text-white p-3 mt-5 text-center">
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
