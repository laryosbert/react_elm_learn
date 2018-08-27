import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import Home from '../page/home'
import Game from '../page/gameMain'
import App from '../App'
import Place from '../page/Place'
import ContextTest from '../page/contextTest'

export default () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/game' component={Game} />
      <Route path='/home' component={Home} />    
      <Route path='/place' component={Place} />
      <Route path='/context' component={ContextTest} />
    </div>    
  </BrowserRouter>
) 
