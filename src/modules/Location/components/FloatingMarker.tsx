'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Icon, Marker as LeafletMarker, LatLng } from 'leaflet';
import { Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

//Floating marker on the map
export const FloatingMarker = ({
  position,
}: {
  position: [number, number];
}) => {
  const markerRef = useRef<LeafletMarker | null>(null);
  const [currentPosition, setCurrentPosition] = useState(position);

  useEffect(() => {
    let animationFrameId: number;
    let start: number | null = null;
    const duration = 1500;
    const amplitude = 0.00004;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const yOffset = Math.sin((progress / duration) * 2 * Math.PI) * amplitude;

      if (markerRef.current) {
        const newLatLng = new LatLng(position[0] + yOffset, position[1]);
        markerRef.current.setLatLng(newLatLng);
        setCurrentPosition([newLatLng.lat, newLatLng.lng]);
      }

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        start = null;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position]);

  const customIcon = new Icon({
    iconUrl: './pin@3x.png',
    iconSize: [40, 64],
  });

  return (
    <Marker position={currentPosition} icon={customIcon} ref={markerRef} />
  );
};
