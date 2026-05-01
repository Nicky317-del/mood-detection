export const fetchSongs = async (mood) => {
  let genre = "pop";

  if (mood === "sad") genre = "acoustic";
  if (mood === "happy") genre = "dance";
  if (mood === "angry") genre = "rock";
  if (mood === "calm") genre = "chill";

  const res = await fetch(
    `https://itunes.apple.com/search?term=${genre}&limit=10`
  );
  const data = await res.json();
  return data.results;
};