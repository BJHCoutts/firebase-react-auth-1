import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import SignUp from './components/session/SignUp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
            </Switch>
        </Router>
        <header className="App-header">
          <SignUp />
        </header>
      </div>
    );
  }
}

export default App;
