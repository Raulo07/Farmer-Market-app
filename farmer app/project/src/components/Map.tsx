import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Location } from '../types';

interface MapProps {
  locations: {
    position: Location;
    title: string;
  }[];
  center: Location;
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

const mapStyles = [
  {
    featureType: 'landscape',
    elementType: 'all',
    stylers: [{ color: '#e9f5db' }]
  },
  {
    featureType: 'water',
    elementType: 'all',
    stylers: [{ color: '#b5e2fa' }]
  }
];

export function Map({ locations, center }: MapProps) {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        options={{ styles: mapStyles }}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.position}
            title={location.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}