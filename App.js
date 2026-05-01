import React, { useState, useEffect } from "react";
import MoodInput from "./components/MoodInput";
import VoiceInput from "./components/VoiceInput";
import SongList from "./components/SongList";
import Favorites from "./components/Favorites";
import Dashboard from "./components/Dashboard";
import { detectMood } from "./services/aiService";
import { fetchSongs } from "./services/musicService";
import "./App.css";

function App() {
  const [moodData, setMoodData] = useState(null);
  const [songs, setSongs] = useState([]);
  const [history, setHistory] = useState([]);

  const handleMood = async (text) => {
    const result = await detectMood(text);
    setMoodData(result);

    const songs = await fetchSongs(result.mood);
    setSongs(songs);

    const updatedHistory = [...history, result.mood];
    setHistory(updatedHistory);
    localStorage.setItem("moodHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className={`app ${moodData?.mood}`}>
      <h1>🎧 AI Mood Music Pro</h1>

      <MoodInput onSubmit={handleMood} />
      <VoiceInput onSubmit={handleMood} />

      <SongList songs={songs} />
      <Favorites />
      <Dashboard history={history} />
    </div>
  );
}

export default App;