import React from "react";
import "./Flags.css";
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

const LeftFlags = () => (

    <div className="leftFlagDiv">

        <img src={indiana} alt="indiana" id="indiana" className="verticalImg"/>
        <img src={iowa} alt="iowa" id="iowa" className="verticalImg"/>
        <img src={kansas} alt="kansas" id="kansas" className="verticalImg"/>
        <img src={kentucky} alt="kentucky" id="kentucky" className="verticalImg"/>
        <img src={louisiana} alt="louisiana" id="louisiana" className="verticalImg"/>
        <img src={maine} alt="maine" id="maine" className="verticalImg"/>
        <img src={maryland} alt="maryland" id="maryland" className="verticalImg"/>
        <img src={mass} alt="massachusetts" id="mass" className="verticalImg"/>
        <img src={michigan} alt="michigan" id="michigan" className="verticalImg"/>
        <img src={minn} alt="minnesota" id="minn" className="verticalImg"/>
        <img src={miss} alt="mississippi" id="miss" className="verticalImg"/>
        <img src={missouri} alt="missouri" id="missouri" className="verticalImg"/>

    </div>
)

export default LeftFlags;