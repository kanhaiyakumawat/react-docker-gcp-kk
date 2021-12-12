import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import MyNavBarTop from "./MyNavBarTop.js"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './Home';
import Catalog from './Catalog';
import BottomNavBar from './BottomNavBar';


export default class App extends Component {
    render() {
        return (
            <div>
                <div>
                <MyNavBarTop/>
                <br/><br/><br/>
                </div>
            <BrowserRouter>

        <div>
            <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/catalog" component={Catalog} />
        </div>
      </BrowserRouter>
      <br/>
      <BottomNavBar/>

            </div>
        )
    }
}
