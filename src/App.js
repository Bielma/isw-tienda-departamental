import React from 'react';

import './App.css';
import Cliente from './components/Cliente.js';
import Venta from './components/Venta.js';
import { Router } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Venta/>
    </div>
  );
}

export default App;
