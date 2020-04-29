import React from 'react';
import style from './intro.css';
import { Parallax } from 'react-scroll-parallax';
const Intro = () => (
        
        <div className="App">
          <header className="App-header">
          
            <Parallax className="title" x={[1000,-1000]}>
              GÖTEBORGSVARVET
             </Parallax>
            <h1>
            
            <Parallax className="subtitle" y={[0, -100]}>
              2
             </Parallax>
             <Parallax className="subtitle" y={[0, -500]}>
              0
             </Parallax>
             <Parallax className="subtitle" y={[0, -200]}>
              1
             </Parallax>
             <Parallax className="subtitle" y={[300, -300]}>
              9
             </Parallax>
             </h1>
          </header>
        </div>
);

export default Intro;

