import styled from 'styled-components';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { red } from '@mui/material/colors';

const GoogleMap = () => {
  const cordinates = { lat: 10.99835602, lng: 77.01502627 };
  //   const ref = React.useRef(null);
  //   const [map, setMap] = React.useState();
  return (
    <div style={{ height: '50vh', width: '100%', backgroundColor: 'red' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzMsqMXYqBWAx1WPXFWKZDf4i8N7rJ5kY' }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={10}
      ></GoogleMapReact> */}
    </div>
  );
};

export default GoogleMap;
