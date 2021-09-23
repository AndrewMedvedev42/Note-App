const Init = {noteId:null}

const deleteNoteReducer = (state=Init, action) => {
        switch (action.type){
            case "SEND_ID_TO_STORE":
                return {...state, noteId:action.payload.id}
            default:
                return {...state}
    }
}

export default deleteNoteReducer