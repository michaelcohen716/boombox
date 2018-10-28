import { connect } from "react-redux";
import SongInfo from '../components/SongInfo';

const mapStateToProps = state => {
    return {
        nowPlaying: state.app.queue[0]
    }
}

export default connect(mapStateToProps, null)(SongInfo);