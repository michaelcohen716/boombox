import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import '../styles/soundBar.css';
import song from '../assets/audio/HolUp.mp3';

class SoundBar extends Component {
    state = {
        value: 25,
        playing: true
    }

    componentDidMount(){
        this.audio = document.getElementById('audio');
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.paused){
            this.audio.pause();
        } else {
            this.audio.play();
        }
    }

    handleChange = (value) => {
        this.setState({
            value
        })
    }

    render() {
        const { value } = this.state;
        
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
                                onChange={this.handleChange}
                                tooltip={false}
                            />
                        </div>
                    </div>
                </div>
                <audio id="audio">
                    <source src={song} />
                </audio>
            </div>
        )
    }
}

export default SoundBar;