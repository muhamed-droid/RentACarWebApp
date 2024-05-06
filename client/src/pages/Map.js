import React from 'react';
import './css/Map.css';

function Map() {
  return (
    <div className="map-frame">
      <div className="map-header">
        <h2>Unsere Lokation</h2>
        <p>Italiener Straße 70, Villach, Österreich</p>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/d/u/2/embed?mid=1BhuJYrcAV5-ig5shwIpz-p6DsenFm30&ehbc=2E312F&noprof=1"
          width="100%"
          height="500"
          style={{ border: 'none' }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
