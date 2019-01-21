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
            {name: "alaska", src: alaska, id: "AK", guess: "wrong"},
            {name: "hawaii", src: hawaii, id: "HI", guess: "wrong"},
            {name: "alabama", src: alabama, id: "AL", guess: "wrong"},
            {name: "arkansas", src: arkansas, id: "AK", guess: "wrong"},
            {name: "arizona", src: arizona, id: "AZ", guess: "wrong"},
            {name: "california", src: california, id: "CA", guess: "wrong"},
            {name: "colorado", src: colorado, id: "CO", guess: "wrong"},
            {name: "connecticut", src: connecticut, id: "CT", guess: "wrong"},
            {name: "delaware", src: delaware, id: "DE", guess: "wrong"},
            {name: "florida", src: florida, id: "FL", guess: "wrong"},
            {name: "georgia", src: georgia, id: "GA", guess: "wrong"},
            {name: "iowa", src: iowa, id: "IA", guess: "wrong"},
            {name: "idaho", src: idaho, id: "ID", guess: "wrong"},
            {name: "illinois", src: illinois, id: "IL", guess: "wrong"},
            {name: "indiana", src: indiana, id: "IN", guess: "wrong"},
            {name: "kansas", src: kansas, id: "KS", guess: "wrong"},
            {name: "kentucky", src: kentucky, id: "KY", guess: "wrong"},
            {name: "louisiana", src: louisiana, id: "LA", guess: "wrong"},
            {name: "mass", src: mass, id: "MA", guess: "wrong"},
            {name: "maryland", src: maryland, id: "MD", guess: "wrong"},
            {name: "maine", src: maine, id: "ME", guess: "wrong"},
            {name: "michigan", src: michigan, id: "MI", guess: "wrong"},
            {name: "minn", src: minn, id: "MN", guess: "wrong"},
            {name: "missouri", src: missouri, id: "MO", guess: "wrong"},
            {name: "miss", src: miss, id: "MS", guess: "wrong"},
            {name: "montana", src: montana, id: "MT", guess: "wrong"},
            {name: "noCaro", src: noCaro, id: "NC", guess: "wrong"},
            {name: "noDak", src: noDak, id: "ND", guess: "wrong"},
            {name: "nebraska", src: nebraska, id: "NE", guess: "wrong"},
            {name: "newHamp", src: newHamp, id: "NH", guess: "wrong"},
            {name: "newJersey", src: newJersey, id: "NJ", guess: "wrong"},
            {name: "newMex", src: newMex, id: "NM", guess: "wrong"},
            {name: "nevada", src: nevada, id: "NV", guess: "wrong"},
            {name: "newYork", src: newYork, id: "NY", guess: "wrong"},
            {name: "ohio", src: ohio, id: "OH", guess: "wrong"},
            {name: "okla", src: okla, id: "OK", guess: "wrong"},
            {name: "oregon", src: oregon, id: "OR", guess: "wrong"},
            {name: "penn", src: penn, id: "PA", guess: "wrong"},
            {name: "rhode", src: rhode, id: "RI", guess: "wrong"},
            {name: "soCaro", src: soCaro, id: "SC", guess: "wrong"},
            {name: "soDak", src: soDak, id: "SD", guess: "wrong"},
            {name: "tenn", src: tenn, id: "TN", guess: "wrong"},
            {name: "texas", src: texas, id: "TX", guess: "wrong"},
            {name: "utah", src: utah, id: "UT", guess: "wrong"},
            {name: "virginia", src: virginia, id: "VA", guess: "wrong"},
            {name: "vermont", src: vermont, id: "VT", guess: "wrong"},
            {name: "wash", src: wash, id: "WA", guess: "wrong"},
            {name: "wisc", src: wisc, id: "WI", guess: "wrong"},
            {name: "wva", src: wva, id: "WV", guess: "wrong"},
            {name: "wyoming", src: wyoming, id: "WY", guess: "wrong"},
        ]
    }


    render() {

        return (

            <div>

            </div>

        )
    }
}


export default Flags;