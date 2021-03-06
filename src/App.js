import React, { Component } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import MyNavBarTop from './navbar/MyNavBarTop.js'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import BottomNavBar from './navbar/BottomNavBar'
import TopNavBar from './navbar/TopNavBar'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
            <TopNavBar/>
          {/* <MyNavBarTop /> */}
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
