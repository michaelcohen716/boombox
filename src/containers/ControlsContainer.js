import Controls from '../components/Controls';
import { connect } from "react-redux";
import { playOrPause } from '../actions';

export default connect(null, { playOrPause })(Controls);