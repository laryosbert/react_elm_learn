import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

const routes = [
  ...require('page/home/router').default,
  ...require('page/game/router').default,
  ...require('page/place/router').default,
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
            <li><Link to="/home">home</Link></li>
            <li><Link to="/place">place</Link></li>
            <li><Link to="/game">game</Link></li>
          </ul>
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
