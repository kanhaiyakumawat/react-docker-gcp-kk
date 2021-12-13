import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import MyNavBarTop from './navbar/MyNavBarTop.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import BottomNavBar from './navbar/BottomNavBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <MyNavBarTop />
          <br />
          <br />
          <br />
        </div>
        <BrowserRouter>
          <div>
            <Route path="/" component={Home} />
            <Route path="/home" component={Home} />
          </div>
        </BrowserRouter>
        <br />
        <BottomNavBar />
      </div>
    )
  }
}
