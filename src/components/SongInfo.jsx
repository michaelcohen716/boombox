import React, { Component } from 'react';
import "../styles/songInfo.css";

class SongInfo extends Component {
    render(){
        const { name, artist, playlist } = this.props.nowPlaying;
        return (
            <div className="song-info">
                <div className="song-info-track">
                    {name}
                </div>
                <div className="song-info-artist">
                    {artist}
                </div>
                <div>
                    {playlist}
                </div>
            </div>
        )
    }
}

export default SongInfo;