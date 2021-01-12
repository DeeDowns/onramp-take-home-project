import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import PrivateRoute from './components/PrivateRoute'
import NavBar from './components/NavBar'
import Register from './components/Register'
import Login from './components/Login'
import BlogFeed from './components/BlogFeed'
import BlogPost from './components/BlogPost'
import AddPost from './components/AddPost'
import EditPost from './components/EditPost'
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

        <PrivateRoute path='/favorites'>
          <Favorites />
        </PrivateRoute>

        <PrivateRoute path='/add-post'>
          <AddPost />
        </PrivateRoute>

        <PrivateRoute path='/edit-post/:id'>
          <EditPost />
        </PrivateRoute>

        <PrivateRoute path='/post/:id'>
          <BlogPost />
        </PrivateRoute>

        <PrivateRoute exact path='/'>
          <BlogFeed />
        </PrivateRoute>

      </Switch>
    </div>
  );
}

export default App;
