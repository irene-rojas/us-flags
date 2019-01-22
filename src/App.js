import React, { Component } from 'react';
import './App.css';
import SVGMap from "./components/Map/Map.js";
import Flags from "./components/Flags/Flags";
// import statesMap from "./components/Map/Map_USA_blank.svg";


class App extends Component {

    onclick = (event) => {
        event.preventDefault();

    }


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
            <SVGMap onClick={this.onClick} />
        </div>

      </div>
    );
  }
}

export default App;
