import React from 'react';
import style from './intro.css';
import { Parallax } from 'react-scroll-parallax';
const Intro = () => (
        
        <div className="App">
          <header className="App-header">
          
            <Parallax className="title" y={[0, 0]}>
              GÖTEBORGSVARVET
             </Parallax>
            <h1>
            
            <Parallax className="subtitle" y={[600, -400]}>
              2
             </Parallax>
             <Parallax className="subtitle" y={[300, -100]}>
              0
             </Parallax>
             <Parallax className="subtitle" y={[900, -700]}>
              1
             </Parallax>
             <Parallax className="subtitle" y={[400, -200]}>
              9
             </Parallax>
             </h1>
          </header>
        </div>
);

export default Intro;

