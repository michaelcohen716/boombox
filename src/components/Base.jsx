import React, { Component } from 'react';
import Controls from "../containers/ControlsContainer";
import Speaker from "../containers/SpeakerContainer";
import "../App.css";

class Base extends Component {
    render(){
        return (
            <div className="base">
                <Speaker />
                <Controls />
                <Speaker />
            </div>
        )
    }
}

export default Base;