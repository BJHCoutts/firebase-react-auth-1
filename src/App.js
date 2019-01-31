import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
