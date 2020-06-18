import React from "react";
import style from "./intro.css";
import { Parallax } from "react-scroll-parallax";
const Intro = () => (
  <div className="App">
    <header className="App-header">
      <Parallax className="title" y={[-100, 0]}>
        GÖTEBORGSVARVET
      </Parallax>
      <h1>
        <Parallax className="subtitle" y={[500, -400]}>
          2
        </Parallax>
        <Parallax className="subtitle" y={[200, -100]}>
          0
        </Parallax>
        <Parallax className="subtitle" y={[800, -700]}>
          2
        </Parallax>
        <Parallax className="subtitle" y={[300, -200]}>
          0
        </Parallax>
        </h1>
        <Parallax className="title2" y={[300, 0]}>
        Virtual Race
      </Parallax>
      
    </header>
  </div>
);

export default Intro;
