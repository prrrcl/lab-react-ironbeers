import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './Pages/Home';
import RandomBeer from './Pages/RandomBeer';
import AllBeers from './Pages/AllBeers';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/random" component={RandomBeer}/>
        <Route exact path="/all" component={AllBeers}/>
      </Switch>
    </>
  );
}

export default App;
