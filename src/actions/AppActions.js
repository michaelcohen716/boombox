import {
    PLAY_OR_PAUSE,
    PLAY_NEXT_SONG,
    SELECT_QUEUE_ITEM
} from './types';

export const playOrPause = () => {
    return {
        type: PLAY_OR_PAUSE
    }
}

export const playNextSong = () => {
    return {
        type: PLAY_NEXT_SONG
    }
}

export const selectQueueItem = (selectedIndex) => {
    return {
        type: SELECT_QUEUE_ITEM,
        selectedIndex
    }
}