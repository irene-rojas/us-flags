import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map/Map.js";
import TopFlags from "./components/Flags/TopFlags";

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="topDiv">
            <TopFlags />
        </div>

        <div className="mapDiv">
            <Map />
            {/* 0.6183 */}
        </div>

      </div>
    );
  }
}

export default App;
