import React from "react";
import "./Flags.css";
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

const BottomFlags = () => (

    <div className="bottomFlagDiv">

        <img src={penn} alt="pennsylvania" id="penn" className="verticalImg"/>
        <img src={rhode} alt="rhode island" id="rhode" className="verticalImg"/>
        <img src={soCaro} alt="south carolina" id="soCaro" className="verticalImg"/>
        <img src={soDak} alt="south dakota" id="soDak" className="verticalImg"/>
        <img src={tenn} alt="tennessee" id="tenn" className="verticalImg"/>
        <img src={texas} alt="texas" id="texas" className="verticalImg"/>
        <img src={utah} alt="utah" id="utah" className="verticalImg"/>
        <img src={vermont} alt="vermont" id="vermont" className="verticalImg"/>
        <img src={virginia} alt="virginia" id="virginia" className="verticalImg"/>
        <img src={wash} alt="wash" id="washington" className="verticalImg"/>
        <img src={wva} alt="west virginia" id="wva" className="verticalImg"/>
        <img src={wisc} alt="wisconsin" id="wisc" className="verticalImg"/>
        <img src={wyoming} alt="wyoming" id="wyoming" className="verticalImg"/>

    </div>

);

export default BottomFlags;