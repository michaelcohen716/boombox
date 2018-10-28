import React, { Component } from 'react';
import QueueItem from "./QueueItem";
import "../styles/queue.css";

class Queue extends Component {
    render(){
        const queueItems = this.props.queue.map((t, i) => {
            const inactive = i !== 0 ? true : false;

            return <QueueItem 
                        inactive={inactive} 
                        track={t} 
                        key={i}
                        index={i}
                        selectQueueItem={this.props.selectQueueItem}/>
        })

        return (
            <div className="queue">
                {queueItems}
            </div>
        )
    }
}

export default Queue;