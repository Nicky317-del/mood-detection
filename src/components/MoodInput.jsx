import React, { useState } from "react";

const MoodInput = ({ onSubmit }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        placeholder="How are you feeling?"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onSubmit(text)}>Analyze</button>
    </div>
  );
};

export default MoodInput;