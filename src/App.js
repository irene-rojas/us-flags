import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map/Map.js";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Map size="small"/>

      </div>
    );
  }
}

export default App;
