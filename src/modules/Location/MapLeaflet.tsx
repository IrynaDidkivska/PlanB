'use client';
import React from 'react';
import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const MapLeafLet = () => {
  const position: [number, number] = [48.68152, 26.58455];
  const customIcon = new Icon({
    iconUrl: './pin.png',
    iconSize: [40, 64],
  });
  return (
    <div className="h-[600px] ">
      <MapContainer
        center={position}
        zoom={19}
        scrollWheelZoom={false}
        className="h-[600px]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="map-tiles"
          // className="leaflet-tile"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            м. Кам’янець-Подільский, БЦ “Розмарин”. <br /> вул. Лесі Українки
            31, каб. 605.
          </Popup>
        </Marker>
        <a href="/">на головну</a>
      </MapContainer>
    </div>
  );
};
export default MapLeafLet;
