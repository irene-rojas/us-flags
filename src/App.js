import React, { Component } from 'react';
import './App.css';
import SVGMap from "./components/Map/Map.js";
import Flags from "./components/Flags/Flags";


class App extends Component {

    state = {
        correct: 0,
        wrong: 0,
        targetFlag: "",
        selectedState: ""
    }

    onClick = (event) => {
        event.preventDefault();
        const clickedState = event.target.id;
        this.setState({
            selectedState: clickedState
        }); 
        // above correct 
        // if (clickedState === this.state.selectedState) {
        //     this.setState({
        //         correct: this.state.correct + 1}, () => {
        //         console.log("hello");
        //     });
        // };
        if (clickedState === !this.state.selectedState) {
            this.setState({
                wrong: this.state.wrong + 1}, () => {
                console.log("wrong");
            });
            // this.getFlag();
        }
    }

    getFlag = (targetFlag) => {
        this.setState({
            targetFlag: targetFlag.target.id
        }, ()=>{
            console.log(`App.js: ${this.state.targetFlag}`)
        });
    }


  render() {
    return (
      <div className="App">

        <div className="header">
            <h1>Match the Flag</h1>
        </div>

        <div className="flagsDiv">
            <Flags 
                sendFlag={this.getFlag}
            />
        </div>

        <div className="mapDiv">
            <SVGMap 
                onClick={this.onClick}
            />
        </div>

        <div className="scoreDiv">
            Correct: {this.state.correct}
            <br></br>
            Wrong: {this.state.wrong}
            <br></br>
            Target State: {this.state.targetFlag}
            <br></br>
            Selected State: {this.state.selectedState}
        </div>

      </div>
    );
  }
}

export default App;
