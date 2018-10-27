import {
    PLAY_OR_PAUSE
} from "../actions/types";


const INITIAL_STATE = {
    volume: 25,
    paused: true
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_OR_PAUSE:
            return {
                ...state, 
                paused: !state.paused
            }
        default:
            return state
    }
}