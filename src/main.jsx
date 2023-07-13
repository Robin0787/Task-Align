import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import Provider from './Provider/Provider';
import routes from './Routes/Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
     <RouterProvider router={routes} />
    </Provider>
    <Toaster />
  </React.StrictMode>,
)
