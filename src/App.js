import React, { Component } from 'react';
import './App.css';
import SVGMap from "./components/Map/Map.js";
import Flags from "./components/Flags/Flags";
// import SVGMap from "./components/Map/Map_USA_blank.svg";


class App extends Component {

    state = {
        correct: 0,
        wrong: 0,
    }

    onClick = (event) => {
        event.preventDefault();
        let clickedElement = event.target.id;
        console.log(clickedElement);        
    }

    callbackHandlerFunction = ( targetFlag ) => {
        const targetState = targetFlag.id;
        if (targetState === true) {
            this.setState({correct: this.state.correct + 1}, () => {
                console.log("correct");
            });
        };
        if (targetState === false) {
            this.setState({wrong: this.state.wrong + 1}, () => {
                console.log("wrong");
            });
        };
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
            <SVGMap 
            onClick={this.onClick}
            handleClickInParent={this.callbackHandlerFunction}
            />
        </div>

        <div className="scoreDiv">
            Correct: {this.state.correct}
            <br></br>
            Wrong: {this.state.wrong}
        </div>

      </div>
    );
  }
}

export default App;
