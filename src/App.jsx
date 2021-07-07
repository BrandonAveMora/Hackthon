import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './Pages/Landing';
import Maps from './Pages/Maps'
import Store from './Pages/Store'

import './App.css';

const App = () => (
  <>
  <Router>
    <Navbar/>

    <Route path = "/" exact component={Landing}/>
    <Route path = "/maps" exact component ={Maps}/>
    <Route path = "/store" exact component ={Store}/>
  </Router>
  </>
)

export default App;
