import styled from 'styled-components';
import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { red } from '@mui/material/colors';

const GoogleMap = ({ data }) => {
  // const cordinates = { lat: 10.99835602, lng: 77.01502627 };
  //   const ref = React.useRef(null);
  //   const [map, setMap] = React.useState();
  const location = { lat: data.lat, lon: data.lon };
  const url =
    'https://www.google.com/maps/embed/v1/view?key=AIzaSyDzMsqMXYqBWAx1WPXFWKZDf4i8N7rJ5kY&center=' +
    String(data.lat) +
    ',' +
    String(data.lat) +
    '&zoom=13&maptype=satellite';
  console.log('data', data);
  console.log(url);
  return (
    <div>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzMsqMXYqBWAx1WPXFWKZDf4i8N7rJ5kY' }}
        defaultCenter={cordinates}
        center={cordinates}
        defaultZoom={10}
      ></GoogleMapReact> */}
      <iframe
        width="500"
        height="130"
        frameborder="0"
        // style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        src={url}
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
