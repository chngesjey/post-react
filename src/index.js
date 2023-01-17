import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import NavbarComponent from './components/NavbarComponents';
import DataComponent from './components/DataComponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavbarComponent />
   <DataComponent />
  </React.StrictMode>
);


