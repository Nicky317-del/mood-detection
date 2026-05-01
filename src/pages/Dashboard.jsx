import React from "react";

const Dashboard = () => {
  const history = JSON.parse(localStorage.getItem("moodHistory")) || [];

  return (
    <div>
      <h2>📊 Dashboard</h2>

      <p>Total moods: {history.length}</p>

      {history.map((m, i) => (
        <p key={i}>👉 {m}</p>
      ))}
    </div>
  );
};

export default Dashboard;