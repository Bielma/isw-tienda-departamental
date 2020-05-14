import React from 'react';

import './App.css';
import Cliente from './components/Cliente.js';
import Venta from './components/Venta.js';
import { Router } from 'react-router-dom';
import Devolucion from './components/Devolucion.js';
import MovimientoAlmacen from './components/Movimientos_Almacen/MovimientoAlmacen.js';
function App() {
  return (
    <div className="App">
      <MovimientoAlmacen/>
    </div>
  );
}

export default App;
