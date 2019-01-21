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
import Flag from "../Flag/Flag";

class Flags extends Component {

    state = {
        flags: [
            {name: "alaska", src: alaska, id: "AK"},
            {name: "hawaii", src: hawaii, id: "HI"},
            {name: "alabama", src: alabama, id: "AL"},
            {name: "arkansas", src: arkansas, id: "AR"},
            {name: "arizona", src: arizona, id: "AZ"},
            {name: "california", src: california, id: "CA"},
            {name: "colorado", src: colorado, id: "CO"},
            {name: "connecticut", src: connecticut, id: "CT"},
            {name: "delaware", src: delaware, id: "DE"},
            {name: "florida", src: florida, id: "FL"},
            {name: "georgia", src: georgia, id: "GA"},
            {name: "iowa", src: iowa, id: "IA"},
            {name: "idaho", src: idaho, id: "ID"},
            {name: "illinois", src: illinois, id: "IL"},
            {name: "indiana", src: indiana, id: "IN"},
            {name: "kansas", src: kansas, id: "KS"},
            {name: "kentucky", src: kentucky, id: "KY"},
            {name: "louisiana", src: louisiana, id: "LA"},
            {name: "mass", src: mass, id: "MA"},
            {name: "maryland", src: maryland, id: "MD"},
            {name: "maine", src: maine, id: "ME"},
            {name: "michigan", src: michigan, id: "MI"},
            {name: "minn", src: minn, id: "MN"},
            {name: "missouri", src: missouri, id: "MO"},
            {name: "miss", src: miss, id: "MS"},
            {name: "montana", src: montana, id: "MT"},
            {name: "noCaro", src: noCaro, id: "NC"},
            {name: "noDak", src: noDak, id: "ND"},
            {name: "nebraska", src: nebraska, id: "NE"},
            {name: "newHamp", src: newHamp, id: "NH"},
            {name: "newJersey", src: newJersey, id: "NJ"},
            {name: "newMex", src: newMex, id: "NM"},
            {name: "nevada", src: nevada, id: "NV"},
            {name: "newYork", src: newYork, id: "NY"},
            {name: "ohio", src: ohio, id: "OH"},
            {name: "okla", src: okla, id: "OK"},
            {name: "oregon", src: oregon, id: "OR"},
            {name: "penn", src: penn, id: "PA"},
            {name: "rhode", src: rhode, id: "RI"},
            {name: "soCaro", src: soCaro, id: "SC"},
            {name: "soDak", src: soDak, id: "SD"},
            {name: "tenn", src: tenn, id: "TN"},
            {name: "texas", src: texas, id: "TX"},
            {name: "utah", src: utah, id: "UT"},
            {name: "virginia", src: virginia, id: "VA"},
            {name: "vermont", src: vermont, id: "VT"},
            {name: "wash", src: wash, id: "WA"},
            {name: "wisc", src: wisc, id: "WI"},
            {name: "wva", src: wva, id: "WV"},
            {name: "wyoming", src: wyoming, id: "WY"},
        ]
    };

    

    render() {
        return (

            <div>
                {this.state.flags.map(flag => {
                    return (
                        <Flag 
                            key={flag.id}
                            src={flag.src}
                            alt={flag.name}
                        />
                    )
                })}

            </div>

        )
    }
}


export default Flags;