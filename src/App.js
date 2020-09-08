import React from 'react';
import './App.css';
import Header from './Header'
import Home from "./Home"
import Checkout from "./Checkout"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div className="App">
      {/*<h1>Hello Clever Programmers, let's build the amazon store :rock</h1>*/}
      {/*Header*/}
      
      <Header />

      <Switch>
        
        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/">
          <Home/>
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
