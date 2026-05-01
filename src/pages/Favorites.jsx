import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("fav")) || [];
    setFav(data);
  }, []);

  return (
    <div>
      <h2>❤️ Favorites</h2>
      {fav.map((song, i) => (
        <p key={i}>{song.trackName}</p>
      ))}
    </div>
  );
};

export default Favorites;