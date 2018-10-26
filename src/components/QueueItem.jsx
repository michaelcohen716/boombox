import React, { Component } from 'react';
import tracklist from "../assets/tracklist.png";
import "../styles/queue.css";

class QueueItem extends Component {
    render() {
        const inactiveClass = this.props.inactive ? 'inactive-queue-item' : '';
        return (
            <div className={`queue-item ${inactiveClass}`}>
                <img src={tracklist} />
                <div className="queue-item-info">
                    <div className="track-name">
                        Hyperparadise
                    </div>
                    <div className="artist-name">
                        Flume
                    </div>
                </div>
            </div>
        )
    }
}

export default QueueItem;