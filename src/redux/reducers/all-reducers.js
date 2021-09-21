import {combineReducers} from "redux"
import noteReducer from "./noteReducer";

const rootReducers = combineReducers({
    notes:noteReducer
})

export default rootReducers