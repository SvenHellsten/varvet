import React, { useState } from 'react';
// import 'leaflet/dist/leaflet.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro/intro';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Countries from './Countries/countries';
import Maps from './Map/Map';
// import 'rsuite/dist/styles/rsuite-default.css';
// import 'rsuite/lib/styles/index.less';
import 'leaflet/dist/leaflet.css';
function App() {

  return (
    <>
      <ParallaxProvider>
        <Intro/>
       <Countries/>
     
      </ParallaxProvider>
       <Maps/>
  </>
  );
}

export default App;
