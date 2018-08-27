import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import './style/common.scss';

const routes = [
  ...require('page/home/router').default,
  ...require('page/game/router').default,
  ...require('page/place/router').default,
  ...require('page/contextTest/router').default,
]


class App extends Component {
  constructor(props, context) {
    super(props, context);   
  }
  
  render() {
    return (     
        <BrowserRouter>          
            {renderRoutes(routes)}          
        </BrowserRouter>
    )
  }
}

export default App;
