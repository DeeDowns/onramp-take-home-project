import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import BlogFeed from './components/BlogFeed'

const App: React.FC =() => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route>
          <BlogFeed />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
