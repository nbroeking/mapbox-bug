

import React from 'react';
import './App.css';

import Map, {NavigationControl, AttributionControl} from 'react-map-gl';

export default function App() {
  const MAPBOX_ACCESS_TOKEN =
    "My Key";


  return (
    <div id='app'>
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -74.5,
          zoom: 12
        }}
        style={{width: '100%', height: '90%'}}
        mapStyle="mapbox://styles/mapbox/outdoors-v12"
        mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        attributionControl={true}
      >
      </Map>
    </div>
  );
}
