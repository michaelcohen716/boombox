import React, { Component } from 'react';
import tracklist from "../assets/tracklist.png";
import "../styles/queue.css";

class QueueItem extends Component {
    render() {
        const { name, artist } = this.props.track;
        const inactiveClass = this.props.inactive ? 'inactive-queue-item' : '';

        return (
            <div className={`queue-item ${inactiveClass}`} onClick={this.selectQueueItem}>
                <img src={tracklist} alt="tracklist" />
                <div className="queue-item-info">
                    <div className="track-name">
                        {name}
                    </div>
                    <div className="artist-name">
                        {artist}
                    </div>
                </div>
            </div>
        )
    }

    selectQueueItem = () => {
        this.props.selectQueueItem(this.props.index);
    }
}

export default QueueItem;