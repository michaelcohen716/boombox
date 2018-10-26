import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import Base from "./Base";
import Controls from "./Controls";
import "../styles/boombox.css";

class Boombox extends Component {
    render(){
        return (
            <div className="boombox">
                <Dashboard />
                <Base />
            </div>
        )
    }
}

export default Boombox;