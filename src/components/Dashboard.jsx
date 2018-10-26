import React, { Component } from 'react';
import SongInfo from "./SongInfo";
import Queue from "./Queue";
import "../styles/dashboard.css";

class Dashboard extends Component {
    render(){
        return (
            <div className="dashboard">
                <div className="belongs-to">
                    
                </div>
                <SongInfo />
                <Queue />
            </div>
        )
    }
}

export default Dashboard;