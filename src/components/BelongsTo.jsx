import React, { Component } from 'react';
import Webcam from "react-webcam";
import camera from "../assets/camera.png";
import retry from "../assets/retry.png";
import "../styles/belongsTo.css";


class BelongsTo extends Component {
    state = {
        photo: "me"    
        // photo: null     
    }

    setRef = webcam => {
        this.webcam = webcam;
    };

    capture = () => {
        if(this.state.photo){
            this.setState({ photo: null });
        } else {
            const photo = this.webcam.getScreenshot();
            this.setState({ photo });
        }
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
                <img src={photo} className="webcam-photo" alt="webcam"/>
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

        const captureImageSource = photo ? retry : camera;

        return (
            <div className="belongs-to">
                <div className="webcam-area">
                    <div className="boombox-owner">
                        Boombox Owner
                    </div>
                    <div className="webcam-holder">
                        {profilePhoto}
                    </div>

                </div>
                <div className="capture">
                    <img src={captureImageSource} onClick={this.capture} className="camera-icon" alt="capture"/>
                </div>
            </div>
        )
    }
}

export default BelongsTo;