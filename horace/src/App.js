import React from "react";
import "./App.css";
import video from "./files/video1.mp4";

function App() {
  return (
    <div className="v-header container">
      <video src={video} autoplay="true" loop="true"></video>
      <h1>hey</h1>
    </div>
  );
}

export default App;
