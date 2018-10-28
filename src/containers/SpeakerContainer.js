import Speaker from '../components/Speaker';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
        nowPlaying: state.app.queue[0]
    }
}

export default connect(mapStateToProps, null)(Speaker);