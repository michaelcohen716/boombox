import React, { Component } from 'react';
import '../styles/playlistButtons.css';

class PlaylistButtons extends Component {
    render(){
        const buttons = ["1", "2", "3", "4"].map((b, i) => {
            const buttonClass = b !== "3" ? "pb-inactive" : "pb-active";
            return (
                <div className={`playlist-button ${buttonClass}`} key={i} >
                    {b}
                </div>
            )
        })
        return (
            <div className="playlist-buttons">
                {buttons}
            </div>
        )
    }
}

export default PlaylistButtons;