import React from "react";
import Logo from "../../image/logo.png";
import "./Navbar.css";
import SpeechRecognition from "../SpeechReconization";
import { faClipboardQuestion } from "@fortawesome/free-solid-svg-icons"; // Import the correct icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BsSearch } from "react-icons/bs";

function Navbar() {
  return (
    <>
      <div className="main-div-logo">
        <input
          type="text"
          placeholder="   Search  Anything  ..."
          className="input-nav-search"
        />
        <SpeechRecognition />
      </div>
    </>
  );
}

export default Navbar;
