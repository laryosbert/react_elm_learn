import React from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";

import Home from '../page/home'
import Game from '../page/gameMain'
import App from '../App'

// // 表格列表
// const table = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/menu/table').default)
//   }, 'table')
// }

// // 图表
// const echarts = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/menu/echarts').default)
//   }, 'echarts')
// }

// // 登录
// const Login = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/login').default)
//   }, 'login')
// }

// // 注册
// const Register = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/register').default)
//   }, 'register')
// }

// // 测试
// const chat = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/chat').default)
//   }, 'chat')
// }
// // 编辑器
// const editor = (location, cb) => {
//   require.ensure([], (require) => {
//     cb(null, require('./pages/menu/editor').default)
//   }, 'editor')
// }

// /* 进入路由的判断 */
// function isLogin(nextState, replaceState) {
//   const token = sessionStorage.getItem('token')
//   if (!token) {
//     replaceState('/login')
//     // hashHistory.push('/login')
//   }
// }

export default () => (
  <BrowserRouter>    
    <div>   
    <Route exact path='/' component={App} />
    <Route path='/game' component={Game} />
    {/* <Route path="/" component={home} onEnter={isLogin}>
      <IndexRoute component={home} />
      <Route path="/table" getComponent={table} />
      <Route path="/echarts" getComponent={echarts} />
      <Route path="/editor" getComponent={editor} />
      <Route path="/chat" getComponent={chat} />
    </Route>
    <Route path="/login" getComponent={Login} />
    <Route path="/register" getComponent={Register} /> */}
    </div>
  </BrowserRouter>
)

// export default routes
