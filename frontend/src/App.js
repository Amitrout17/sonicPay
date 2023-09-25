import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");
  const isSpeechRecognitionSupported =
    "webkitSpeechRecognition" in window || "SpeechRecognition" in window;

  const startRecognition = () => {
    if (!isSpeechRecognitionSupported) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;

    recognition.start();
    setRecognition(recognition);

    recognition.onresult = async (event) => {
      const currentTranscript =
        event.results[event.results.length - 1][0].transcript;
      setTranscript(currentTranscript);

      // Send the transcribed text to the backend
      try {
        const res = await axios.post("http://localhost:4000/process-voice", {
          voiceData: currentTranscript,
        });
        console.log(res);
      } catch (error) {
        console.error("Error sending voice data to the backend:", error);
      }
      recognition.stop();
    };
  };

  const stopRecognition = () => {
    if (recognition) {
      recognition.stop();
    }
  };

  return (
    <div>
      {isSpeechRecognitionSupported ? (
        <div>
          <button onClick={startRecognition}>Start Voice Capture</button>
          <button onClick={stopRecognition}>Stop Voice Capture</button>
          <div>{transcript}</div>
        </div>
      ) : (
        <div>Speech recognition is not supported in your browser.</div>
      )}
    </div>
  );
};

export default App;
