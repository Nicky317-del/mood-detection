import React, { useState } from "react";
import SongList from "../components/SongList";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [input, setInput] = useState("");

  const fetchSongs = async () => {
    if (!input.trim()) return;

    let query = input.toLowerCase();

    // 🎯 Smart Hindi/Bollywood mapping
    if (query.includes("happy")) {
      query = "bollywood happy songs";
    } else if (query.includes("sad")) {
      query = "arijit singh sad songs";
    } else if (query.includes("love") || query.includes("romantic")) {
      query = "bollywood romantic songs";
    } else if (query.includes("party")) {
      query = "bollywood party songs";
    }

    const res = await fetch(
      `https://itunes.apple.com/search?term=${query}&limit=25&country=IN&media=music`
    );

    const data = await res.json();
    setSongs(data.results || []);
  };

  return (
    <div>
      <h1>🎧 Mini Spotify </h1>

      <input
        placeholder="Enter mood (happy, sad, romantic...)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "10px",
          width: "60%",
          marginRight: "10px"
        }}
      />

      <button onClick={fetchSongs}>Search</button>

      <SongList songs={songs} />
    </div>
  );
};

export default Home;