import React, { Component } from "react";
import "./App.css";

class AppDragDropDemo extends Component {

    state = {
        tasks: [
            {name: "Angular", category: "wip", bgcolor: "yellow"},
            {name: "React", category: "wip", bgcolor: "pink"},
            {name: "Vue", category: "complete", bgcolor: "skyblue"}
        ]
    }



    render() {

        let tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach((t) => {
            tasks[t.category].push(
                <div key={t.name}
                className="draggable"
                style={{backgroundColor: t.bgcolor}} >
                {t.name}
                </div>
            );
        });

        return (
            <div className="containerDrag">
                DRAG & DROP DEMO 
            </div>
        );
    }
}


export default AppDragDropDemo;
