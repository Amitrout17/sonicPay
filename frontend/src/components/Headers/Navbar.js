import React from "react";
import Logo from "../../image/logo.png";
import "./Navbar.css";
import SpeechRecognition from "../SpeechReconization";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons"; // Import the correct icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <>
      <div className="main-div-logo">
        <input
          type="text"
          placeholder="Search  Anything  ..."
          className="input-nav-search"
        />
        <SpeechRecognition />
        <button>
          <FontAwesomeIcon
            icon={faClipboardQuestion}
            style={{
              padding: "10px",
            }}
            size="lg"
          />
          Ask Assistance
        </button>
      </div>
    </>
  );
}

export default Navbar;
