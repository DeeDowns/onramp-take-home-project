import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import BlogFeed from './components/BlogFeed'
import BlogPost from './components/BlogPost'
import AddPost from './components/AddPost'
import Favorites from './components/Favorites'

const App: React.FC =() => {
  return (
    <div className="App">
      <NavBar />

      <Switch>
        <Route path='/register'>
          <Register />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/add-post'>
          <AddPost />
        </Route>

        <Route path='/favorites'>
          <Favorites />
        </Route>

        <Route path='/post/:id'>
          <BlogPost />
        </Route>

        <Route path='/'>
          <BlogFeed />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
