import React, { useState } from "react";
import MoodInput from "../components/MoodInput";
import VoiceInput from "../components/VoiceInput";
import SongList from "../components/SongList";
import { detectMood } from "../services/aiService";
import { fetchSongs } from "../services/musicService";

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [mood, setMood] = useState("");

  const handleMood = async (text) => {
    const result = await detectMood(text);
    setMood(result.mood);

    const data = await fetchSongs(result.mood);
    setSongs(data);

    localStorage.setItem("moodHistory",
      JSON.stringify([
        ...(JSON.parse(localStorage.getItem("moodHistory")) || []),
        result.mood
      ])
    );
  };

  return (
    <div className={`app ${mood}`}>
      <h1>🎧 AI Mood Music</h1>

      <MoodInput onSubmit={handleMood} />
      <VoiceInput onSubmit={handleMood} />

      <SongList songs={songs} />
    </div>
  );
};

export default Home;