import { Data, fetchDataActions, FetchDataType } from "../../types/fetchData"

const initialState:Data = {
    data: [],
    error: '',
}
export const dataReducer = (state:Data = initialState, action: fetchDataActions):Data => {
    switch (action.type) {
        case FetchDataType.FETCH_DATA:
            return {...state, data: action.payload}
        case FetchDataType.FETCH_DATA_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}