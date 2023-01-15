import { Dispatch } from "react";
import { ActionSetTrack, PlayerActionType } from "../types/player";
import { FetchDataType, fetchDataActions } from "../types/fetchData";

export default {
    init(initAudio:any) {
        return ({
            type: PlayerActionType.INIT,
            payload: initAudio,
        })
    },
    playTrack() {
        return ({
            type: PlayerActionType.PLAY
        })
    },

    pauseTrack() {
        return ({
            type: PlayerActionType.PAUSE
        })
    },

    setActiveTrack(track:ActionSetTrack) {
        return({
            type: PlayerActionType.SET_ACTIVE,
            payload: track,
        })
    },

    setVolume(volume:number) {
        return({
            type: PlayerActionType.SET_VOLUME,
            payload: volume
        })
    },
    setDuration(duration:number) {
        return({
            type: PlayerActionType.SET_DURATION,
            payload: duration
        })
    },
    setCurrentTime(currentTime:number) {
        return({
            type: PlayerActionType.SET_CURRENT_TIME,
            payload: currentTime
        })
    }
}

export const fetchData = () => {

    return async (dispatch: Dispatch<fetchDataActions>) => {
        try {
            const response = await fetch('http://localhost:3030/artists');
            const data = await response.json();
            dispatch({type: FetchDataType.FETCH_DATA, payload: data});
        } catch (e) {
            dispatch({type: FetchDataType.FETCH_DATA_ERROR, payload: 'Произошла ошибка...'})
        }
    }
}