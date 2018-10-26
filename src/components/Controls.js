import React, { Component } from 'react';
import PlaylistButtons from "./PlaylistButtons";
import "../styles/controls.css";

class Controls extends Component {
    render(){
        return (
            <div className="controls">
                <PlaylistButtons />
            </div>
        )
    }
}

export default Controls;