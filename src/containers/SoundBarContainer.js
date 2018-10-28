import SoundBar from '../components/SoundBar';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        paused: state.app.paused,
        nowPlaying: state.app.queue[0]
    }
}

export default connect(mapStateToProps, null)(SoundBar);