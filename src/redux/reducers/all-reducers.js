import {combineReducers} from "redux"
import noteReducer from "./noteReducer";
import deleteNoteReducer from "./delete-note-reducer";

const rootReducers = combineReducers({
    notes:noteReducer,
    NoteToDelete:deleteNoteReducer
})

export default rootReducers