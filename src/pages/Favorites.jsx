import React from "react";

const Favorites = () => {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div>
      <h2>❤️ Favorites</h2>

      {fav.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid">
          {fav.map((song, i) => (
            <div key={i} className="card">
              <img src={song.artworkUrl100} />
              <h4>{song.trackName}</h4>
              <p>{song.artistName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;