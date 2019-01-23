import React, { Component } from 'react';
import './App.css';
import SVGMap from "./components/Map/Map.js";
import Flags from "./components/Flags/Flags";
// import SVGMap from "./components/Map/Map_USA_blank.svg";


class App extends Component {

    state = {
        correct: 0,
        wrong: 0,
        targetFlag: "",
        selectedState: ""
    }

    onClick = (event) => {
        event.preventDefault();
        let clickedElement = event.target.id;
        // console.log(clickedElement);
        this.setState({
            selectedState: clickedElement
        });  
        // if (targetState === this.state.selectedState) {
        //     this.setState({correct: this.state.correct + 1}, () => {
        //         console.log("correct");
        //     });
        // };
        // if (!targetState === this.state.selectedState) {
        //     this.setState({wrong: this.state.wrong + 1}, () => {
        //         console.log("wrong");
        //     });
        // };
    }

    setTargetFlag = ( targetFlag ) => {
        const targetState = targetFlag.id;
        this.setState({
            targetFlag: targetState
        });
        this.props.handleInParent({targetFlag});      
        console.log(`App.js: ${targetState}`)
      } 


  render() {
    return (
      <div className="App">

        <div className="header">
            <h1>Match the Flag</h1>
        </div>

        <div className="flagsDiv">
            <Flags 
                setTargetFlag={this.setTargetFlag}
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
