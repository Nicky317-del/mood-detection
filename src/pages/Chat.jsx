import React, { useState } from "react";

const Chat = () => {
  const [msg, setMsg] = useState("");
  const [reply, setReply] = useState("");

  const handleAsk = () => {
    setReply("AI feature can be added using API");
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