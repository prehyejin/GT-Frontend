import { RouterProvider } from 'react-router-dom';
import React from 'react'
import { Reset } from 'styled-reset'

import routes from './routes';
import GlobalStyle from './GlobalStyle';

export default function App(){
    return (    
        <React.StrictMode>
            <Reset />
            <GlobalStyle/>
            <RouterProvider router={routes} />
        </React.StrictMode>
    );
}