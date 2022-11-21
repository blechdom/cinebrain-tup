import React from 'react';
import './index.css';
import App from './App';
import TLoungePage from "./pages/TLoungePage";
import MiniGolfPage from "./pages/MiniGolfPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "t-lounge",
    element: <TLoungePage />
  },
  {
    path: "mini-golf",
    element: <MiniGolfPage />
  },
]);

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <RouterProvider router={router} />
);
