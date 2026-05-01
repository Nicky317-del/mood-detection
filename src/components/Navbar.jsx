import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>🎧 Mood Music</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/chat">Chat</Link>
      </div>
    </nav>
  );
};

export default Navbar;