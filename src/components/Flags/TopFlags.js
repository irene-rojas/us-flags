import React from "react";
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

const TopFlags = () => (

    <div className="topFlagDiv">

        <img src={alabama} alt="alabama" id="alabama" className="horizontalImg"/>
        <img src={alaska} alt="alaska" id="alaska" className="horizontalImg"/>
        <img src={arizona} alt="arizona" id="arizona" className="horizontalImg"/>
        <img src={arkansas} alt="arkansas" id="arkansas" className="horizontalImg"/>
        <img src={california} alt="california" id="california" className="horizontalImg"/>
        <img src={colorado} alt="colorado" id="colorado" className="horizontalImg"/>
        <img src={connecticut} alt="connecticut" id="connecticut" className="horizontalImg"/>
        <img src={delaware} alt="delaware" id="delaware" className="horizontalImg"/>
        <img src={florida} alt="florida" id="florida" className="horizontalImg"/>
        <img src={georgia} alt="georgia" id="georgia" className="horizontalImg"/>
        <img src={hawaii} alt="hawaii" id="hawaii" className="horizontalImg"/>
        <img src={idaho} alt="idaho" id="idaho" className="horizontalImg"/>
        <img src={illinois} alt="illinois" id="illinois" className="horizontalImg"/>

    </div>

)


export default TopFlags;