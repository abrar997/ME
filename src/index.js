import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Admin from './Admin-dashboard/Admin';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <React.StrictMode>
    <App />
  </React.StrictMode>
 
 <HashRouter>
  <Admin/>
 </HashRouter>
  </>
);


