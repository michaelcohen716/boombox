import React, { Component } from 'react';
import Webcam from "react-webcam";
import "../styles/belongsTo.css";


class BelongsTo extends Component {
    state = {
        photo: null    
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        const photo = this.webcam.getScreenshot();
        this.setState({ photo });
        // console.log(imageSrc)
    };

    render(){
        const { photo } = this.state;

        const videoConstraints = {
            width: 180,
            height: 180,
            facingMode: "user"
        };

        const profilePhoto = photo ? (
            <div>
                <img src={photo} className="webcam-photo"/>
            </div>
        ) : (
                <Webcam
                    audio={false}
                    height={150}
                    ref={this.setRef}
                    screenshotFormat="image/jpeg"
                    width={150}
                    className="webcam"
                    videoConstraints={videoConstraints}
                />
        )

        return (
            <div className="belongs-to">
                <div className="webcam-holder">
                    {profilePhoto}
                </div>
                <div className="capture">
                    <button onClick={this.capture}>Capture photo</button>
                </div>
            </div>
        )
    }
}

export default BelongsTo;