import React, { Component } from 'react';
import "../styles/controls.css";

class PlaylistButtons extends Component {
    render(){
        const buttons = ["1", "2", "3", "4"].map(b => {
            const buttonClass = b !== "2" ? "pb-inactive" : "pb-active";
            return (
                <div className={`playlist-button ${buttonClass}`}>
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