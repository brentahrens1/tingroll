import React from 'react';
import './sass/_base.scss'
import { Switch, Route } from 'react-router-dom'

//components
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import ProjectShow from './components/ProjectShow/ProjectShow'
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path={`/:id`} component={ProjectShow} />
      </Switch>
    </div>
  );
}

export default App;
