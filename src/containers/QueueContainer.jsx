import { connect } from "react-redux";
import Queue from '../components/Queue';
import {
    selectQueueItem
} from '../actions';

const mapStateToProps = state => {
    return {
        queue: state.app.queue
    }
}

export default connect(mapStateToProps,
     { selectQueueItem }
)(Queue);