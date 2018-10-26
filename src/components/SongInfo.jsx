import React, { Component } from 'react';
import "../styles/songInfo.css";

class SongInfo extends Component {
    render(){
        return (
            <div className="song-info">
                <div className="song-info-track">
                    Hyperparadise
                </div>
                <div className="song-info-artist">
                    Flume
                </div>
                <div>
                    Electronica
                </div>
            </div>
        )
    }
}

export default SongInfo;