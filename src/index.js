import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import SecondScreen from './components/SecondScreen';
import { mockDataTime } from './components/Tab';

const uniqueLocations = Array.from(new Set(mockDataTime.map((obj) => obj.area)));

const routerConfig = uniqueLocations.map((location) => ({
  path: `/available-shifts/${location}`,
  element: <SecondScreen location = {location} />,
}));

routerConfig.push(
  {
  path: "/",
  element: <App/>,
  },
  {
    path:'available-shifts',
    element:<SecondScreen/>
  }
);

const router = createBrowserRouter(routerConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
