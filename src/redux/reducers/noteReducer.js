const Init = {name:[]}

const noteReducer = (state=Init, action) => {
        switch (action.type){
            case "PUSH_UPDATED_NOTES":
                return {...state}
            default:
                return {...state}
    }
}

export default noteReducer