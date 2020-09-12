import React from 'react';
import './sass/_base.scss'
import { Switch, Route } from 'react-router-dom'

//components
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
