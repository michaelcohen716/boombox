import React, { Component } from 'react';
// import AudioSpectrum from 'react-audio-spectrum';
// import Peaks from 'peaks.js';
import "../styles/speaker.css";
import firstSong from '../assets//audio/HolUp.mp3';

class Speaker extends Component {
    state = {
        audio: firstSong,
        beatSeconds: 0
    }

    componentWillReceiveProps(nextProps){
        if(!this.props.playing && nextProps.playing){
            this.setAnimation();
        }
        
        if (this.props.playing && !nextProps.playing){
            clearInterval(this.beats);
            this.setState({ beatSeconds: 0 });
        }

        if(this.props.playing && this.props.nowPlaying !== nextProps.nowPlaying){
            clearInterval(this.beats);
            setTimeout(() => {
                this.setAnimation();
            }, 300);
        }
    }
    
    setAnimation = () => {
        this.beats = setInterval(() => {
            this.setState({ beatSeconds: this.state.beatSeconds + 1});
        }, 50);
    }

    render(){
        const speck = (color) => (
            <span className={`speaker-speck ${color}`} />
        )

        const specks = [];
        const { beatSeconds } = this.state;
        
        for(let i = 0; i < 5000; i++){
            if(i > 5 && beatSeconds > 0 && beatSeconds % i === 0 && this.props.playing){
                let color;
                if(i % 2 == 0){
                    color = 'grey';
                } else {
                    color = 'blue';
                }

                specks.push(speck(color));
            }
        }

        return (
            <div className="speakers">
                <div id="audio-canvas">
                    {specks}
                </div>
            </div>  
        )
    }
}

export default Speaker;
