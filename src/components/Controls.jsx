import React, { Component } from 'react';
import PlaylistButtons from "./PlaylistButtons";
import pause from "../assets/pause.png";
import play from "../assets/play.png";
import "../styles/controls.css";

class Controls extends Component {
    state = {
        paused: false
    }

    render(){
        const playOrPause = this.state.paused ? play : pause;
        return (
            <div className="controls">
                <div onClick={this.playOrPause}>
                    <img src={playOrPause} className="play-pause-icon" />
                </div>
                <PlaylistButtons />
            </div>
        )
    }

    playOrPause = () => {
        this.setState({ paused: !this.state.paused })
    }
}

export default Controls;