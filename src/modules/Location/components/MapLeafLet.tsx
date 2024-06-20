'use client';
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import { FloatingMarker } from './FloatingMarker';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

export const MapLeafLet = () => {
  const position: [number, number] = [48.6817, 26.58439];

  return (
    <div className="h-[600px]">
      <MapContainer
        center={position}
        zoom={19}
        scrollWheelZoom={false}
        className="h-[600px] z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
        />
        <FloatingMarker position={position} />
      </MapContainer>
    </div>
  );
};

export default MapLeafLet;
