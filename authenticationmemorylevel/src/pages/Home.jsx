import { useEffect, useState } from "react";
import getHomeData from "../services/authService";

function Home() {
  const [data, setData] = useState("");

  useEffect(() => {
    getHomeData()
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        alert("Not authenticated. Please login.");
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>{data}</p>
    </div>
  );
}

export default Home;
