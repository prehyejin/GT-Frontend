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
    String(data.lon) +
    '&zoom=13&maptype=satellite';

  return (
    <div>
      <iframe
        width={500}
        height={130}
        frameborder={0}
        // style="border:0"
        refererpolicy="no-referrer-when-downgrade"
        src={url}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GoogleMap;
