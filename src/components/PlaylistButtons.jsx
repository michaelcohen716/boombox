import React, { Component } from 'react';
import '../styles/playlistButtons.css';

export const playlists = [
    'Hip Hop',
    'Future',
    'Electronica',
    'Alternative'
]

class PlaylistButtons extends Component {
    render(){
        const { activePlaylist } = this.props;

        const buttons = playlists.map((p, i) => {
            const buttonClass = p !== activePlaylist ? "pb-inactive" : "pb-active";
            const selectPlaylist = this.selectPlaylist.bind(this, p)
            return (
                <div className={`playlist-button ${buttonClass}`} key={i} onClick={selectPlaylist}>
                    {i + 1}
                </div>
            )
        })

        return (
            <div className="playlist-buttons">
                {buttons}
            </div>
        )
    }

    selectPlaylist = (playlist) => {
        this.props.selectPlaylist(playlist);
    }
}

export default PlaylistButtons;