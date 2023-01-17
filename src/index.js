import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import NavbarComponent from './components/NavbarComponents';
import CardComponent from './components/CardsComponents';
import { Row } from 'react-bootstrap';
import Sidebar from './components/SidebarComponents';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <NavbarComponent />
   <Sidebar />
   <Row>
    {/* 1 */}
   <CardComponent />
   {/* 2 */}
   <CardComponent />
   {/* 3 */}
   <CardComponent />
   {/* 4 */}
   <CardComponent />
   {/* 5 */}
   <CardComponent />
   </Row>
  </React.StrictMode>
);


