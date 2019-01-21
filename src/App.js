import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map/Map.js";
// import TopFlags from "./components/Flags/TopFlags";
// import LeftFlags from "./components/Flags/LeftFlags";
// import RightFlags from "./components/Flags/RightFlags";
// import BottomFlags from "./components/Flags/BottomFlags";
// import AppDragDropDemo from './AppDragDropDemo';
import Flags from "./components/Flags/Flags";

class App extends Component {

    state = {
        accurate: [],
        beingDragged: false,
    };

  render() {
    return (
      <div className="App">

        <div className="mapDiv">
            <Map />
        </div>

        <div className="flagsDiv">
            <Flags />
        </div>

      </div>
    );
  }
}

export default App;
