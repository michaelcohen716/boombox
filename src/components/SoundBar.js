import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import '../styles/soundBar.css';
// import 'react-rangeslider/lib/index.css'

class SoundBar extends Component {
    state = {
        value: 25,
    }

    handleChange = (value) => {
        this.setState({
            value: value
        })
    }

    render() {
        console.log(this.state)
        const { value } = this.state
        return (
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
        )
    }
}

export default SoundBar;