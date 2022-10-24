import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes';
import GlobalStyle from './GlobalStyle';
import { Reset } from 'styled-reset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Reset />
    <GlobalStyle/>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
