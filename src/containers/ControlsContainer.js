import { connect } from "react-redux";
import Controls from '../components/Controls';
import { 
    playOrPause,
    playPreviousSong,
    playNextSong,     
    playRandomSong,
    selectPlaylist
} from '../actions';

const mapStateToProps = state => {
    return {
        activePlaylist: state.app.queue[0].playlist
    }
}

export default connect(mapStateToProps, { 
    playOrPause,
    playPreviousSong,
    playNextSong,
    playRandomSong,
    selectPlaylist
})(Controls);