import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
 
export const Map = props => {
  const position = [-33.4266707, -70.6202899]; // [latitude, longitude]
  const zoomLevel = 15;
 
  return (
    <MapContainer 
        center={position} 
        zoom={zoomLevel}
        scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {props.pois?.map(poi => (
        <Marker key={poi.id} position={[poi.latitude, poi.longitude]}>
            <Popup>
            {poi.name}
            </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};