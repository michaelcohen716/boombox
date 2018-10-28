import {
    PLAY_OR_PAUSE,
    PLAY_NEXT_SONG,
    SELECT_QUEUE_ITEM
} from "../actions/types";
import tracklist from "../tracklist";

const QUEUE_LENGTH = 3;

const INITIAL_STATE = {
    // volume: 25,
    paused: true,
    queue: [
        tracklist['HolUp'], 
        tracklist['BigPoppa'],
        tracklist['Grammy']
    ]
}   

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_OR_PAUSE: {
            return {
                ...state, 
                paused: !state.paused
            }
        }

        case PLAY_NEXT_SONG: {
            const queue = state.queue.slice(1);
            const newSong = tracklist[queue[1].next];
            queue.push(tracklist[newSong]);

            return {
                ...state,
                queue
            }
        } 

        case SELECT_QUEUE_ITEM: {
            const queue = state.queue.slice(action.selectedIndex);
            while (queue.length < QUEUE_LENGTH){
                const newSong = tracklist[queue[queue.length - 1].next];
                queue.push(newSong);
            }

            return {
                ...state,
                queue
            }

        }

        default: {
            return state
        }
    }
}