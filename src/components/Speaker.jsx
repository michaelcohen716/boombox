import React, { Component } from 'react';
import AudioSpectrum from 'react-audio-spectrum';
import "../styles/speaker.css";
import firstSong from '../assets//audio/HolUp.mp3';

class Speaker extends Component {
    state = {
        audio: firstSong
    }

    componentDidMount() {
        // this.audio = document.getElementById('visualizer');
        // this.audio.volume = 0;
    }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.paused) {
        //     this.audio.pause();
        // } else {
        //     this.audio.play();
        // }

        // if (nextProps.nowPlaying !== this.props.nowPlaying) {
        //     this.onTrackChange(nextProps.nowPlaying);
        // }
    }

    onTrackChange = (nextTrack) => {
        // const audio = require(`../assets/audio/${nextTrack.source}`);
        // this.setState({ audio }, () => {
        //     this.audio.pause();
        //     this.audio.load();
        //     if (!this.props.paused) {
        //         this.audio.play();
        //     }
        // })
    }

    render(){
        return (
            <div className="speakers">
                {/* <AudioSpectrum 
                    id="audio-viz"
                    height={200}
                    width={200}
                    audioId={'visualizer'}
                    capColor={'red'}
                    meterWidth={2}
                    meterCount={512}
                    meterColor={[
                        { stop: 0, color: '#f00' },
                        { stop: 0.5, color: '#0CD7FD' },
                        { stop: 1, color: 'red' }
                    ]}
                    gap={4}/> */}
                    <audio id="visualizer">
                        <source src={this.state.audio} />
                    </audio>
            </div>
        )
    }
}

export default Speaker;
