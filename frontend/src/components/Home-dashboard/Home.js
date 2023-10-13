import React from "react";
import Sidebar from "../Sidebar";
import "./Home.css";
import Navbar from "../Headers/Navbar";
function Home() {
  return (
    <div className="dashboard-home">
      <div className="dashboard-home-sidebar">
        <Sidebar />
      </div>
      <Navbar />
    </div>
  );
}

export default Home;
