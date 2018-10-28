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
        const { playPreviousSong, playNextSong, playOrPause, playRandomSong } = this;
        const { selectPlaylist, activePlaylist } = this.props;
        const playOrPauseImage = this.state.paused ? play : pause;

        return (
            <div className="controls">
                <SoundBar />
                <div onClick={playOrPause} className="play-pause-holder">
                    <img src={playOrPauseImage} className="play-pause-icon" alt={'playOrPauseImage'}/>
                </div>
                <div className="extra-controls">
                    <img src={fastForward} className="back" alt="back" onClick={playPreviousSong}/>
                    <img src={fastForward} className="next" alt="next" onClick={playNextSong}/>
                    <img src={shuffle} className="shuffle" alt="shuffle" onClick={playRandomSong}/>
                </div>
                <PlaylistButtons 
                    selectPlaylist={selectPlaylist}
                    activePlaylist={activePlaylist}/>
            </div>
        )
    }

    playOrPause = () => {
        this.setState({ paused: !this.state.paused });
        this.props.playOrPause();
    }

    playPreviousSong = () => {
        this.props.playPreviousSong();
    }

    playNextSong = () => {
        this.props.playNextSong();
    }

    playRandomSong = () => {
        this.props.playRandomSong();
    }
}

export default Controls;