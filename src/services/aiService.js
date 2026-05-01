export const detectMood = async (text) => {
  // Simple logic (no API key needed for now)
  const lower = text.toLowerCase();

  if (lower.includes("sad")) return { mood: "sad" };
  if (lower.includes("happy")) return { mood: "happy" };
  if (lower.includes("angry")) return { mood: "angry" };
  if (lower.includes("calm")) return { mood: "calm" };

  return { mood: "happy" };
};