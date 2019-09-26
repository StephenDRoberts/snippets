import React from 'react';
// import logo from './logo.svg';
import img from './Kotlin_UG_logo.svg';
import './App.css';

const divStyle = {
  'animation-duration': '8s'
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={img} className="App-logo ld ld-vortex-in" style={divStyle} alt="logo" />
        <p>
          Fuck <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
