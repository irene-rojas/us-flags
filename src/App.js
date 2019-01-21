import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map/Map.js";
import Flags from "./components/Flags/Flags";

class App extends Component {



  render() {
    return (
      <div className="App">

        <div className="header">
            Match the Flag
        </div>

        <div className="flagsDiv">
            <Flags />
        </div>

        <div className="mapDiv">
            <Map />
        </div>

      </div>
    );
  }
}

export default App;
