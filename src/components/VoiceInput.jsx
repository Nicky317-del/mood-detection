import React from "react";

const VoiceInput = ({ onSubmit }) => {
  const start = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.onresult = (e) => {
      onSubmit(e.results[0][0].transcript);
    };
    recognition.start();
  };

  return <button onClick={start}>🎤 Speak</button>;
};

export default VoiceInput;