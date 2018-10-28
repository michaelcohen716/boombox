import { connect } from "react-redux";
import Controls from '../components/Controls';
import { 
    playOrPause,
    playPreviousSong,
    playNextSong,     
    playRandomSong
} from '../actions';

export default connect(null, { 
    playOrPause,
    playPreviousSong,
    playNextSong,
    playRandomSong
})(Controls);