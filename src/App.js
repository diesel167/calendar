import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Builder from './Components/Builder.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Builder/>
      </div>
    );
  }
}

export default App;
