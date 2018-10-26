import React, { Component } from 'react';
import Controls from "./Controls";
import "../App.css";


class Base extends Component {
    render(){
        return (
            <div className="base">
                <div className="speakers">
                    </div>
                <Controls />
                <div className="speakers">
                </div>
            </div>
        )
    }
}

export default Base;