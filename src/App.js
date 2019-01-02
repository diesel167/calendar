import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import './App.css';
import Builder from './Components/Builder.js';
import $ from 'jquery';


let helpDate = new Date();



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Builder helpDate={helpDate}/>
      </div>
    );
  }
}

export default App;
