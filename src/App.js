import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const routes = [
  ...require('page/home/router'),
  ...require('page/game/router'),
  ...require('page/place/router'),
]

class App extends Component {
  constructor(props, context) {
    super(props, context);   
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">game</Link></li>
          </ul>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
