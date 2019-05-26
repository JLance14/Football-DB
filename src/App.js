import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Pages/Home';
import Products from './Pages/Products'
import Navbar from './Components/Templates/Navbar'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
        </div>
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
        </Switch>
      </Router>
    );
  }
}

export default App;
