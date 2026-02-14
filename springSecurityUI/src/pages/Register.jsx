import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/register", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMsg(res.data);
      setTimeout(() => navigate("/login"), 1000);
    } catch (error) {
      if (error.response) {
        setMsg("Registration failed");
      } else {
        setMsg("Server error. Try again later.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 border mb-3"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-3"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <button className="w-full bg-green-600 text-white p-2 rounded">
          Register
        </button>
        {msg && <p className="mb-2 text-center">{msg}</p>}
        <p className="text-sm text-center mt-4">
          Already registered?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
