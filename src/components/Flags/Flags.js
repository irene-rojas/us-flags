import React, { Component } from 'react';
import "./Flags.css";
import alabama from "./images/Alabama.png";
import alaska from "./images/Alaska.png";
import arizona from "./images/Arizona.png";
import arkansas from "./images/Arkansas.png";
import california from "./images/California.png";
import colorado from "./images/Colorado.png";
import connecticut from "./images/Connecticut.png";
import delaware from "./images/Delaware.png";
import florida from "./images/Florida.png";
import georgia from "./images/Georgia.png";
import hawaii from "./images/Hawaii.png";
import idaho from "./images/Idaho.png";
import illinois from "./images/Illinois.png";
import indiana from "./images/Indiana.png";
import iowa from "./images/Iowa.png";
import kansas from "./images/Kansas.png";
import kentucky from "./images/Kentucky.png";
import louisiana from "./images/Louisiana.png";
import maine from "./images/Maine.png";
import maryland from "./images/Maryland.png";
import mass from "./images/Massachusetts.png";
import michigan from "./images/Michigan.png";
import minn from "./images/Minnesota.png";
import miss from "./images/Mississippi.png";
import missouri from "./images/Missouri.png";
import montana from "./images/Montana.png";
import nebraska from "./images/Nebraska.png";
import nevada from "./images/Nevada.png";
import newHamp from "./images/NewHampshire.png";
import newJersey from "./images/NewJersey.png";
import newMex from "./images/NewMexico.png";
import newYork from "./images/NewYork.png";
import noCaro from "./images/NorthCarolina.png";
import noDak from "./images/NorthDakota.png";
import ohio from "./images/Ohio.png";
import okla from "./images/Oklahoma.png";
import oregon from "./images/Oregon.png";
import penn from "./images/Pennsylvania.png";
import rhode from "./images/RhodeIsland.png";
import soCaro from "./images/SouthCarolina.png";
import soDak from "./images/SouthDakota.png";
import tenn from "./images/Tennessee.png";
import texas from "./images/Texas.png";
import utah from "./images/Utah.png";
import vermont from "./images/Vermont.png";
import virginia from "./images/Virginia.png";
import wash from "./images/Washington.png";
import wva from "./images/WestVirginia.png";
import wisc from "./images/Wisconsin.png";
import wyoming from "./images/Wyoming.png";

class Flags extends Component {

    state = {
        flags: [
            {name: "Alaska", src: alaska, id: "AK"},
            {name: "Hawaii", src: hawaii, id: "HI"},
            {name: "Alabama", src: alabama, id: "AL"},
            {name: "Arkansas", src: arkansas, id: "AR"},
            {name: "Arizona", src: arizona, id: "AZ"},
            {name: "California", src: california, id: "CA"},
            {name: "Colorado", src: colorado, id: "CO"},
            {name: "Connecticut", src: connecticut, id: "CT"},
            {name: "Delaware", src: delaware, id: "DE"},
            {name: "Florida", src: florida, id: "FL"},
            {name: "Georgia", src: georgia, id: "GA"},
            {name: "Iowa", src: iowa, id: "IA"},
            {name: "Idaho", src: idaho, id: "ID"},
            {name: "Illinois", src: illinois, id: "IL"},
            {name: "Indiana", src: indiana, id: "IN"},
            {name: "Kansas", src: kansas, id: "KS"},
            {name: "Kentucky", src: kentucky, id: "KY"},
            {name: "Louisiana", src: louisiana, id: "LA"},
            {name: "Massachusetts", src: mass, id: "MA"},
            {name: "Maryland", src: maryland, id: "MD"},
            {name: "Maine", src: maine, id: "ME"},
            {name: "Michigan", src: michigan, id: "MI"},
            {name: "Minnesota", src: minn, id: "MN"},
            {name: "Missouri", src: missouri, id: "MO"},
            {name: "Mississippi", src: miss, id: "MS"},
            {name: "Montana", src: montana, id: "MT"},
            {name: "North Carolina", src: noCaro, id: "NC"},
            {name: "North Dakota", src: noDak, id: "ND"},
            {name: "Nebraska", src: nebraska, id: "NE"},
            {name: "New Hampshire", src: newHamp, id: "NH"},
            {name: "New Jersey", src: newJersey, id: "NJ"},
            {name: "New Mexico", src: newMex, id: "NM"},
            {name: "Nevada", src: nevada, id: "NV"},
            {name: "New York", src: newYork, id: "NY"},
            {name: "Ohio", src: ohio, id: "OH"},
            {name: "Oklahoma", src: okla, id: "OK"},
            {name: "Oregon", src: oregon, id: "OR"},
            {name: "Pennsylvania", src: penn, id: "PA"},
            {name: "Rhode Island", src: rhode, id: "RI"},
            {name: "South Carolina", src: soCaro, id: "SC"},
            {name: "South Dakota", src: soDak, id: "SD"},
            {name: "Tennessee", src: tenn, id: "TN"},
            {name: "Texas", src: texas, id: "TX"},
            {name: "Utah", src: utah, id: "UT"},
            {name: "Virginia", src: virginia, id: "VA"},
            {name: "Vermont", src: vermont, id: "VT"},
            {name: "Washington", src: wash, id: "WA"},
            {name: "Wisconsin", src: wisc, id: "WI"},
            {name: "West Virginia", src: wva, id: "WV"},
            {name: "Wyoming", src: wyoming, id: "WY"},
        ],
        targetFlag: [
            {name: "", src: "", id: ""}
        ],
    };

    componentDidMount() {
        let targetFlag = this.state.flags[Math.floor(Math.random()*this.state.flags.length)];
            this.setState({
                name: targetFlag.name,
                src: targetFlag.src,
                id: targetFlag.id
            });
    }

    // flag callback
    sendFlag = (targetFlag) => {
        this.props.sendFlag(targetFlag);
    }  


    render() {
        return (

        <div>
            <img  
                src={this.state.src} 
                alt={this.state.id}
                onLoad={this.sendFlag}
                id={this.state.id}
            />
            <br></br>
            <h3>{this.state.name}</h3>
        </div>

        )
    }
}

export default Flags;