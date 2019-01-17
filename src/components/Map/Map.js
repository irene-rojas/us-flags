import React, { Component } from 'react';
import "./Map.css";
import MapSVG from "./Map_USA_blank.svg";

class Map extends Component {

    render() {
        return (
            <div>

            <img src={MapSVG} alt="usa map"></img>
            </div>
            
        )
    }
}



export default Map;