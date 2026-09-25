import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './views/Home';
import Samples from './views/Samples';
import Portfolio from './views/Portfolio.js';
import './index.scss';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App is the layout wrapper
        children: [
            {
                path: "/",
                element: <Home />,
            }, {
                path: "/samples",
                element: <Samples />,
            }, {
                path: "/portfolio",
                element: <Portfolio />,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);