import { type } from "os";
import { Artists } from "./album";

export interface Data {
    data: Artists[]
    error: string
}

export enum FetchDataType {
    FETCH_DATA = 'FETCH_DATA',
    FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
}

interface fetchDataAction {
    type: FetchDataType.FETCH_DATA,
    payload: Artists [],
}

interface fetchDataErrorAction {
    type: FetchDataType.FETCH_DATA_ERROR,
    payload: string
}

export type fetchDataActions = 
    fetchDataAction
    | fetchDataErrorAction
