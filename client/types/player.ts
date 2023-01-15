import { type } from "os";

export interface PlayerState {
    name: string;
    track: null | string;
    audioRef: any
    volume: number;
    duration: number;
    currentTime: number;
    play: boolean;
}
export interface ActionSetTrack {
    name: string;
    track: string;
}
export enum PlayerActionType {
    INIT = 'INIT',
    PLAY = 'PLAY',
    PAUSE = 'PAUSE',
    SET_ACTIVE = 'SET_ACTIVE',
    SET_CURRENT_TIME = 'SET_CURRENT_TIME',
    SET_VOLUME = 'SET_VOLUME',
    SET_DURATION = 'SET_DURATION',
}

interface Init {
    type: PlayerActionType.INIT
    payload: any
}

interface PlayAction {
    type: PlayerActionType.PLAY
}
interface PauseAction {
    type: PlayerActionType.PAUSE
    
}
interface SetActiveTrack {
    type: PlayerActionType.SET_ACTIVE
    payload: ActionSetTrack
}
interface SetCurrentTime {
    type: PlayerActionType.SET_CURRENT_TIME
    payload: number
}
interface SetVolume {
    type: PlayerActionType.SET_VOLUME
    payload: number
}
interface SetDuration {
    type: PlayerActionType.SET_DURATION
    payload: number
}

export type ActionType = 
 PlayAction
 | Init
 | PauseAction
 | SetActiveTrack
 | SetCurrentTime
 | SetVolume
 | SetDuration