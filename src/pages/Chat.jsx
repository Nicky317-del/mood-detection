import React, { useState } from "react";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk = () => {
    if (msg.includes("sad")) {
      setReply("Try calm music 🎧");
    } else if (msg.includes("happy")) {
      setReply("Try upbeat songs 🎶");
    } else {
      setReply("Tell me your mood 😊");
    }
  };

  return (
    <div>
      <h2>🤖 Chat</h2>

      <input onChange={(e) => setMsg(e.target.value)} />
      <button onClick={handleAsk}>Ask</button>

      <p>{reply}</p>
    </div>
  );
};

export default Chat;