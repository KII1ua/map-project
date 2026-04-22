import { useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';


function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    if(mapRef.current) return;

    mapRef.current = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }, []);
  return (
    <>
      <div className="header">헤더</div>
      <div id="map"></div>
    </>
  );
}

export default App
