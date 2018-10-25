import React, { Component } from 'react';
import "../styles/boombox.css";

class Boombox extends Component {
    render(){
        return (
            <div className="boombox">
                <div className="dashboard">
                    dashboard
                </div>
                <div className="controls">
                    <div>
                        sound boom
                    </div>
                    <div>
                        play controls
                    </div>
                    <div>
                        sound boom
                    </div>
                </div>
            </div>
        )
    }
}

export default Boombox;