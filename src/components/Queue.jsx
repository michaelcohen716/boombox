import React, { Component } from 'react';
import QueueItem from "./QueueItem";
import "../styles/queue.css";

class Queue extends Component {
    render(){
        const tracks = [
            { track: "Hyperparadise", artist: "Flume" },
            { track: "Space Jam", artist: "Michael Jordan" },
            { track: "Old McDonald", artist: "Farmer"}
        ]

        const queueItems = tracks.map((s, i) => {
            const inactive = i !== 0 ? true : false;
            return <QueueItem inactive={inactive} key={i}/>
        })

        return (
            <div className="queue">
                {queueItems}
            </div>
        )
    }
}

export default Queue;