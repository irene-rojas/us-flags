import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map/Map.js";
import TopFlags from "./components/Flags/TopFlags";
import LeftFlags from "./components/Flags/LeftFlags";
import RightFlags from "./components/Flags/RightFlags";
import BottomFlags from "./components/Flags/BottomFlags";
import AppDragDropDemo from './AppDragDropDemo';

class App extends Component {

    state = {
        accurate: [],
        beingDragged: false,
    };

  render() {
    return (
      <div className="App">

        <div className="topDiv">
            <TopFlags draggable="true" />
        </div>

        <div className="leftDiv">
            <LeftFlags draggable="true"/>
        </div>

        <div className="rightDiv">
            <RightFlags draggable="true"/>
        </div>

        <div className="bottomDiv">
            <BottomFlags draggable="true"/>
        </div>

        <div className="mapDiv">
            <Map />
            {/* 0.6183 */}
        </div>

        <div className="containerDrag">
            <AppDragDropDemo />
        </div>

      </div>
    );
  }
}

export default App;
