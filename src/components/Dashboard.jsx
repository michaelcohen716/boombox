import React, { Component } from 'react';
import SongInfo from "../containers/SongInfoContainer";
import Queue from "../containers/QueueContainer";
import BelongsTo from "./BelongsTo";
import "../styles/dashboard.css";

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard">
                <BelongsTo />
                <SongInfo />
                <Queue />
            </div>
        )
    }
}

export default Dashboard;