import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import Menu from './Components/Menu/Menu';
import { ReactComponent as Logo } from './Assets/f1_logo.svg';

function App() {
  return (
    <div className="App">
      <h1 className="Title">
        <Menu />
        <span><Logo className="App-logo" /> Driver's Database </span>
      </h1>
      <Search />
    </div>
  );
}

export default App;
