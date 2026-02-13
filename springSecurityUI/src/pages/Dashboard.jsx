import { useEffect, useState } from "react";
import API from "../api";

const Dashboard = () => {

  const [data, setData] = useState("");

  useEffect(() => {
    API.get("/dashboard")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return <h1>{data}</h1>;
};

export default Dashboard;
