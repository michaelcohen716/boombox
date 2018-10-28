import {
    PLAY_OR_PAUSE,
    PLAY_PREVIOUS_SONG,
    PLAY_NEXT_SONG,
    PLAY_RANDOM_SONG,
    SELECT_QUEUE_ITEM,
    SELECT_PLAYLIST
} from "../actions/types";
import tracklist from "../tracklist";

const QUEUE_LENGTH = 3;
const NUM_TRACKS = 16;

const INITIAL_STATE = {
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

        case PLAY_PREVIOUS_SONG: {
            let queue = state.queue.slice(0, 2);
            const previousSong = [tracklist[queue[0].previous]];
            queue = previousSong.concat(queue);

            return {
                ...state,
                queue
            }
        }

        case PLAY_NEXT_SONG: {
            const queue = state.queue.slice(1);
            const newSong = tracklist[queue[1].next];
            queue.push(newSong);

            return {
                ...state,
                queue
            }
        } 

        case PLAY_RANDOM_SONG: {
            const queue = [];
            const trackIndex = Math.floor(Math.random() * NUM_TRACKS);
            const trackKey = Object.keys(tracklist)[trackIndex];
            const nextTrack = tracklist[trackKey];
            queue.push(nextTrack);

            while(queue.length < QUEUE_LENGTH){
                const newSong = tracklist[queue[queue.length - 1].next];
                queue.push(newSong);    
            }
            
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

        case SELECT_PLAYLIST: {
            const queue = [];
            const trackKeys = Object.keys(tracklist);

            for(let i = 0; i < trackKeys.length; i++){
                const track = tracklist[trackKeys[i]];
                if(track.playlist === action.playlist){
                    queue.push(track);
                    break;
                }
            }

            while (queue.length < QUEUE_LENGTH) {
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