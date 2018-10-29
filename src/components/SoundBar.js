import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import '../styles/soundBar.css';
import firstSong from '../assets//audio/HolUp.mp3';
import AudioSpectrum from 'react-audio-spectrum';


class SoundBar extends Component {
    state = {
        value: 25,
        audio: firstSong
    }

    componentDidMount(){
        this.audio = document.getElementById('audio');
        this.audio.volume = this.state.value / 100;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.paused){
            this.audio.pause();
        } else {
            this.audio.play();
        }

        if(nextProps.nowPlaying !== this.props.nowPlaying){
            this.onTrackChange(nextProps.nowPlaying);
        }
    }

    onTrackChange = (nextTrack) => {
        const audio = require(`../assets/audio/${nextTrack.source}`);
        this.setState({ audio }, () => {
            this.audio.pause();
            this.audio.load();
            if(!this.props.paused){
                this.audio.play();
            }
        })
    }

    handleVolumeChange = (value) => {
        this.setState({
            value
        })

        this.audio.volume = value / 100;
    }

    render() {
        const { value, audio } = this.state;
        
        return (
            <div>
                <div className='slider orientation-reversed'>
                    <div className='slider-group'>
                        <div className='slider-horizontal'>
                            <Slider
                                min={0}
                                max={100}
                                value={value}
                                orientation='horizontal'
                                onChange={this.handleVolumeChange}
                                tooltip={false}
                            />
                        </div>
                    </div>
                </div>
                <audio id="audio">
                    <source src={audio} />
                </audio>
            </div>
        )
    }
}

export default SoundBar;