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
        let clickedState = event.target.id;
        this.setState({
            selectedState: clickedState
        }); 
        const matchState = this.state.targetFlag;
        if (clickedState === matchState) {
            this.setState({
                correct: this.state.correct + 1,
                selectedState: ""
            });
        }
        else {
        if (clickedState !== matchState) {
            this.setState({
                wrong: this.state.wrong + 1,
            });
        }
        }
    }

    // flag callback
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

        {/* key = new flag when this.state.correct updates */}
        <div className="flagsDiv">
            
            <div className="flagImgDiv">
                <Flags 
                    sendFlag={this.getFlag}
                    key={this.state.correct}
            />
            </div>

            <div className="correctDiv">
                <strong>Correct: {this.state.correct}</strong>   
            </div>
            <div className="wrongDiv">
                <strong>Wrong: {this.state.wrong}</strong>
            </div>
            <div className="selectedDiv">
                <strong>Selected State: {this.state.selectedState}</strong>
            </div>
        </div>

        <div className="mapDiv">
            <SVGMap 
                onClick={this.onClick}
            />
        </div>



      </div>
    );
  }
}

export default App;
