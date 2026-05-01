import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="app-container">

      <div className="sidebar">
        <h2>🎧 Mini Spotify</h2>

        <Link to="/">🏠 Home</Link>
        <Link to="/dashboard">📊 Dashboard</Link>
        <Link to="/favorites">❤️ Favorites</Link>
        <Link to="/chat">🤖 Chat</Link>
      </div>

      <div className="main-content">
        {children}
      </div>

    </div>
  );
};

export default Layout;