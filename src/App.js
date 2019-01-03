import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Builder from './Components/Builder.js';



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
