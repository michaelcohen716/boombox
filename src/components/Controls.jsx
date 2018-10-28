import React, { Component } from 'react';
import PlaylistButtons from "./PlaylistButtons";
import SoundBar from "../containers/SoundBarContainer";
import pause from "../assets/pause.png";
import play from "../assets/play.png";
import fastForward from "../assets/fastForward.png";
import shuffle from "../assets/shuffle.png";
import "../styles/controls.css";

class Controls extends Component {
    state = {
        paused: true
    }

    render(){
        const { playNextSong, playOrPause } = this;
        const playOrPauseImage = this.state.paused ? play : pause;

        return (
            <div className="controls">
                <SoundBar />
                <div onClick={playOrPause} className="play-pause-holder">
                    <img src={playOrPauseImage} className="play-pause-icon" alt={'playOrPauseImage'}/>
                </div>
                <div className="extra-controls">
                    <img src={fastForward} className="back" alt="back" onClick={playNextSong}/>
                    <img src={fastForward} className="next" alt="next"/>
                    <img src={shuffle} className="shuffle" alt="shuffle"/>
                </div>
                <PlaylistButtons />
            </div>
        )
    }

    playOrPause = () => {
        this.setState({ paused: !this.state.paused });
        this.props.playOrPause();
    }

    playNextSong = () => {
        this.props.playNextSong();
    }
}

export default Controls;