import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import logo from './logo.svg';
import './App.css';
import Intro from './Intro/intro';
import Countries from './Countries/countries';

function App() {
  return (
      <ParallaxProvider>
        <Intro/>
        <Countries/>
      </ParallaxProvider>






  );
}

export default App;
