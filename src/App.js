import React, { Component } from 'react';
import './App.css';
import SVGMap from "./components/Map/Map.js";
import Flags from "./components/Flags/Flags";
// import SVGMap from "./components/Map/Map_USA_blank.svg";


class App extends Component {

    onClick = (event) => {
        event.preventDefault();
        let clickedElement = event.target.id;
        console.log(clickedElement);
    }


  render() {
    return (
      <div className="App">

        <div className="header">
            <h1>Match the Flag</h1>
        </div>

        <div className="flagsDiv">
            <Flags />
        </div>

        <div className="mapDiv">
            <SVGMap onClick={this.onClick}/>
        </div>

      </div>
    );
  }
}

export default App;
