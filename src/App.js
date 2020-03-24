import React from 'react';

import './App.css';
import Cliente from './components/Cliente.js';
import Header from './components/Header.js';
function App() {
  return (
    <div className="App">
      <Header/>
     <Cliente/>

      <footer id = "footer">
        <div className= "center">
          <p>
            &copy; Proyecto, Seminario de Ingeniería de Software.
          </p>
        </div>
      </footer>
     
    </div>
  );
}

export default App;
