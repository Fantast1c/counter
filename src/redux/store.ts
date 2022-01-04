import {combineReducers, createStore} from "redux";
import {countReducer} from "./countReducer";


const rootReducer = combineReducers({count: countReducer})

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)
