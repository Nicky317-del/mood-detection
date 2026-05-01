import React from "react";

const SongList = ({ songs }) => {
  const addFav = (song) => {
    const old = JSON.parse(localStorage.getItem("fav")) || [];
    localStorage.setItem("fav", JSON.stringify([...old, song]));
  };

  return (
    <div className="grid">
      {songs.map((song, i) => (
        <div key={i} className="card">
          <img src={song.artworkUrl100} alt="" />
          <h4>{song.trackName}</h4>
          <button onClick={() => addFav(song)}>❤️</button>
        </div>
      ))}
    </div>
  );
};

export default SongList;