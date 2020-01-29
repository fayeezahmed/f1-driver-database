import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Menu from './Components/Menu/Menu';
import { ReactComponent as Logo } from './Assets/f1_logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="Title">
            <Menu />
            <span><Logo className="App-logo" /> Driver's Database </span>
          </div>
            <Switch>
                <Route path="/driver_comparison">
                    <div data-testid="DriverComp"></div>
                </Route>
                <Route path="/driver_stats">
                    <Search />
                </Route>
            </Switch>
        </div>
      </Router>
  );
}

export default App;
