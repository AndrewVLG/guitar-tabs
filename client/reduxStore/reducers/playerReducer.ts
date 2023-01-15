import { ActionType, PlayerActionType, PlayerState } from "../../types/player";

const initialState:PlayerState = {
    audioRef: {},
    play: false,
    name: '',
    track: null,
    currentTime: 0,
    duration: 0,
    volume: 30,
} 

export const playerReducer = (state:PlayerState = initialState, action: ActionType): PlayerState => {

    switch(action.type) {
        case PlayerActionType.INIT:
            return ({...state, audioRef: action.payload});
        case PlayerActionType.PLAY:
            return ({...state, play: true});
        case PlayerActionType.PAUSE:
            return ({...state, play: false});
        case PlayerActionType.SET_ACTIVE:
            return ({...state, track: action.payload.track, name: action.payload.name, play: true});
        case PlayerActionType.SET_VOLUME:
            return ({...state, volume: action.payload});
        case PlayerActionType.SET_DURATION:
            return ({...state, duration: action.payload});
        case PlayerActionType.SET_CURRENT_TIME:
            return({...state, currentTime: action.payload})
        default:
            return state;

    }
}