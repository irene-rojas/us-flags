import React from "react";
import "./Flags.css";
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

const RightFlags = () => (

    <div className="rightFlagDiv">

    <img src={montana} alt="montana" id="montana" className="verticalImg"/>
    <img src={nebraska} alt="nebraska" id="nebraska" className="verticalImg"/>
    <img src={nevada} alt="nevada" id="nevada" className="verticalImg"/>
    <img src={newHamp} alt="new hampshire" id="newHamp" className="verticalImg"/>
    <img src={newJersey} alt="new jersey" id="newJersey" className="verticalImg"/>
    <img src={newMex} alt="new mexico" id="newMex" className="verticalImg"/>
    <img src={newYork} alt="new york" id="newYork" className="verticalImg"/>
    <img src={noCaro} alt="north carolina" id="noCaro" className="verticalImg"/>
    <img src={noDak} alt="north dakota" id="noDak" className="verticalImg"/>
    <img src={ohio} alt="ohio" id="ohio" className="verticalImg"/>
    <img src={okla} alt="okla" id="oklahoma" className="verticalImg"/>
    <img src={oregon} alt="oregon" id="oregon" className="verticalImg"/>

    </div>

)

export default RightFlags;