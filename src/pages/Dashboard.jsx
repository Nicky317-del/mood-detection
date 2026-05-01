import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("moodHistory")) || [];
    setHistory(data);
  }, []);

  return (
    <div>
      <h2>📊 Mood History</h2>
      {history.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
    </div>
  );
};

export default Dashboard;