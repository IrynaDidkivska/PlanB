'use client';
import React from 'react';
import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import Contacts from '@/components/Contacts/Contacts';

const MapLeafLet = () => {
  const position: [number, number] = [48.68152, 26.58455];
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
            <Contacts
              location={
                <div className="flex flex-col gap-3 not-italic">
                  <p>м. Кам’янець-Подільский, БЦ “Розмарин”</p>
                  <p>вул. Лесі Українки 31, каб. 605</p>
                </div>
              }
            />
          </Popup>
        </Marker>
        <a href="/">на головну</a>
      </MapContainer>
    </div>
  );
};
export default MapLeafLet;
