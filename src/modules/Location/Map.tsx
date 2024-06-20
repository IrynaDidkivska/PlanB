'use client';
import React from 'react';
import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Contacts from '@/components/Contacts/Contacts';

//Static market on the map
//TODO  показати замовнику і обрати варіант відображення маркера
const MapLeafLet = () => {
  const position: [number, number] = [48.6817, 26.58439];
  const customIcon = new Icon({
    iconUrl: './pin@3x.png',
    iconSize: [40, 64],
  });
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
        <Marker position={position} icon={customIcon}>
          <Popup>
            <Contacts />
          </Popup>
        </Marker>
        <a href="/">на головну</a>
      </MapContainer>
    </div>
  );
};
export default MapLeafLet;
