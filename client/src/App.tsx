import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'

const App: React.FC =() => {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
