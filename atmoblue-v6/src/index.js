import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { collection, getDocs } from 'firebase/firestore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);