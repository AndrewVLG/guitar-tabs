import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
import { playerReducer } from "./playerReducer";

export const rootReducer = combineReducers({
    player: playerReducer,
    data: dataReducer,
})

export type RootState = ReturnType<typeof rootReducer>