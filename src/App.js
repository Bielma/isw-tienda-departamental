import React from 'react';

import './App.css';
import Cliente from './components/Cliente.js';
import Venta from './components/venta/Venta.js';
import Router from './Router';



function App() {
  return (
    <div className="App">
      {/*poner MOvAlmancen antes de hacer merge*/}
      <Router/>
    </div>
  );
}

export default App;
