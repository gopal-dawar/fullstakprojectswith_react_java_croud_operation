import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const deleteAccount = async () => {
    const confirmDelete = window.confirm(
      "Are you sure? This will permanently delete your account.",
    );

    if (!confirmDelete) return;

    try {
      const res = await axios.delete("http://localhost:8080/delete", {
        withCredentials: true, // 🔥 REQUIRED for session
      });

      if (res.status === 200) {
        alert("Account deleted successfully");
        navigate("/register");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete account");
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Welcome Gopal 🎉 You are logged in</h1>

      <button
        onClick={deleteAccount}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Delete Account
      </button>
    </div>
  );
}
