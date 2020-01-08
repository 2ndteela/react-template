import React from 'react'
import {BrowserRouter as Router, Route, Link}  from 'react-router-dom'

import Home from './views/Home'
import About from './views/About'
import Header from './comps/Header'

function App() {
  return (
    <div className="App">
      <Header title="Template Project">
        <div>
          thing 1
        </div>
        <div>
          thing 2
        </div>
      </Header>
      <Router>
        <div style={{width: '100%'}}>
          <div style={{flexDirection: 'row', width: '100%', justifyContent: 'flex-start'}}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
          <div id="home-container">
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
