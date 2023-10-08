import axios from "axios";
import "./speech-rec.css";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faMicrophoneLinesSlash } from "@fortawesome/free-solid-svg-icons";

const SpeechRecognition = () => {
  const [recognition, setRecognition] = useState(null);
  const [transcript, setTranscript] = useState("");
  const isSpeechRecognitionSupported =
    "webkitSpeechRecognition" in window || "SpeechRecognition" in window;

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "f") {
        startRecognition();
      }
      if (event.key === "j") {
        stopRecognition();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

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
        <div className="speech-rec-main">
          <button onClick={startRecognition}>
            <FontAwesomeIcon
              icon={faMicrophone}
              style={{
                padding: "10px",
              }}
              size="lg"
            />
            Start Voice
          </button>
          <input
            value={transcript}
            placeholder="Click start to Operate.."
            style={{
              height: "37px",
            }}
          />
          <button onClick={stopRecognition}>
            <FontAwesomeIcon
              icon={faMicrophoneLinesSlash}
              style={{
                padding: "10px",
              }}
              size="lg"
            />
            Stop Voice
          </button>
        </div>
      ) : (
        <div>Speech recognition is not supported in your browser.</div>
      )}
    </div>
  );
};

export default SpeechRecognition;
