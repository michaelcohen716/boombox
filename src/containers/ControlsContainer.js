import { connect } from "react-redux";
import Controls from '../components/Controls';
import { 
    playOrPause,
    playNextSong     
} from '../actions';

export default connect(null, { 
    playOrPause,
    playNextSong 
})(Controls);