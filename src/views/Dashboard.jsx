import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [dataResponse, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/notes", {
          withCredentials: true,
        });
        setData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
        window.location.href = "/login";
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Pagina de notas</h1>
      <p>{dataResponse}</p>
    </div>
  );
};

export default Dashboard;
