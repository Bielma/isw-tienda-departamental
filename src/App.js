import React from 'react';

import './App.css';
import Router from './Router';
import {Provider} from 'react-redux';
import store from './redux/store.js'

function App() {
  return (
    <Provider store = {store}>
      <Router/>
    </Provider>
  );
}

export default App;
