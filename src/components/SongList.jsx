import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const SongList = ({ songs }) => {
  const [currentSong, setCurrentSong] = useState(null);

  const audioRef = useRef(new Audio());

  // ❤️ Save favorites
  const addFav = (song) => {
    const old = JSON.parse(localStorage.getItem("fav")) || [];
    localStorage.setItem("fav", JSON.stringify([...old, song]));
  };

  // ▶️ Play song
  const handlePlay = (song) => {
    if (audioRef.current.src !== song.previewUrl) {
      audioRef.current.src = song.previewUrl;
    }

    audioRef.current.play();
    setCurrentSong(song);
  };

  // ⏸ Pause
  const handlePause = () => {
    audioRef.current.pause();
  };

  // ⏹ Stop
  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setCurrentSong(null);
  };

  if (!songs.length) {
    return (
      <div style={{ padding: "20px" }}>
        <p>🎧 Search a mood to start listening</p>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: "140px" }}>
      
      {/* SONG GRID */}
      <div className="grid">
        {songs.map((song, i) => (
          <motion.div
            key={i}
            className="card"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={song.artworkUrl100} alt="" />
            <h4>{song.trackName}</h4>
            <p>{song.artistName}</p>

            <button onClick={() => handlePlay(song)}>▶ Play</button>
            <button onClick={() => addFav(song)}>❤️</button>
          </motion.div>
        ))}
      </div>

      {/* 🎧 FIXED PLAYER */}
      {currentSong && (
        <motion.div
          className="player"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          
          {/* SONG INFO */}
          <div className="player-info">
            <img src={currentSong.artworkUrl100} alt="" />
            <div>
              <p style={{ margin: 0 }}>{currentSong.trackName}</p>
              <small>{currentSong.artistName}</small>
            </div>
          </div>

          {/* CONTROLS */}
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={() => handlePlay(currentSong)}>▶</button>
            <button onClick={handlePause}>⏸</button>
            <button onClick={handleStop}>⏹</button>
          </div>

        </motion.div>
      )}
    </div>
  );
};

export default SongList;