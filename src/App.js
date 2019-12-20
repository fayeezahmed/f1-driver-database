import React from 'react';
import './App.css';
import Search from './Components/Search/Search';
import { ReactComponent as Logo } from './Assets/f1_logo.svg';

function App() {
  return (
    <div className="App">
      <h1 className="Title">
        <Logo className="App-logo" /> Driver's Database
      </h1>
      <Search />
    </div>
  );
}

export default App;
