import { RouterProvider } from 'react-router-dom';
import React from 'react'
import { Reset } from 'styled-reset'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';


import routes from './routes';
import GlobalStyle from './GlobalStyle';

const queryClient = new QueryClient();

export default function App(){
    return (    
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <Reset />
                <GlobalStyle/>
                <RouterProvider router={routes} />
            </QueryClientProvider>
        </React.StrictMode>
    );
}