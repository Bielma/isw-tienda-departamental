import React from 'react';

import './App.css';
import Cliente from './components/Cliente.js';
import Venta from './components/Venta.js';
import Router from './Router';
import Devolucion from './components/Devolucion.js';
import MovimientoAlmacen from './components/Movimientos_Almacen/MovimientoAlmacen.js';
import AjusteInventario from './components/ajuste_inventario/AjusteInventario.js';
import FlujoEfectivo from './components/flujo_efectivo/FlujoEfectivo.js';


function App() {
  return (
    <div className="App">
      {/*poner MOvAlmancen antes de hacer merge*/}
      <Router/>
    </div>
  );
}

export default App;
