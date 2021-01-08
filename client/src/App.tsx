import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import BlogFeed from './components/BlogFeed'
import AddPost from './components/AddPost'

const App: React.FC =() => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path='/'>
          <BlogFeed />
        </Route>

        <Route path='/add-post'>
          <AddPost />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
