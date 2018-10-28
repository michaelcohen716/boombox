import {
    PLAY_OR_PAUSE,
    PLAY_PREVIOUS_SONG,
    PLAY_NEXT_SONG,
    PLAY_RANDOM_SONG,
    SELECT_QUEUE_ITEM
} from './types';

export const playOrPause = () => {
    return {
        type: PLAY_OR_PAUSE
    }
}

export const playPreviousSong = () => {
    return {
        type: PLAY_PREVIOUS_SONG
    }
}

export const playNextSong = () => {
    return {
        type: PLAY_NEXT_SONG
    }
}

export const playRandomSong = () => {
    return {
        type: PLAY_RANDOM_SONG
    }
}

export const selectQueueItem = (selectedIndex) => {
    return {
        type: SELECT_QUEUE_ITEM,
        selectedIndex
    }
}