import {useLocation, useHistory} from "react-router-dom"
import "../styles/css/detal-view-page.css"
import firebase from "../util/firebase";
import { useEffect, useState } from "react";

export const DetalView = () => {

    const [note, setNote] = useState({})
    // const [noteTitle, setNoteTitle] = useState("")
    const [noteValue, setNoteValue] = useState("")

    const [ saveButtonStatus, setSaveButtonStatus] = useState(true)

    const setValue = (e) => {
        setNoteValue(e.target.value)
        setSaveButtonStatus(false)
}

    const location = useLocation()
    const noteID = location.pathname.split("/")[2]

    const fireRef = firebase.database().ref("List-Of-Notes")

    useEffect(()=>{
        fireRef.on("value", (snapshot)=>{
            const ListOfnotes = snapshot.val()
            for (let id in ListOfnotes) {
                if(id === noteID){
                    setNote(ListOfnotes[id])
                }
            }
        })
    },[])

    function copyText() {
        const el = document.querySelector(`textarea`);
        el.select()
        document.execCommand("copy")
    }

    const updateNoteValue = () => {
        fireRef.child(noteID).update({'value': noteValue})
    }

    const updateNoteTitle = (e) => {
        fireRef.child(noteID).update({'title': e.target.value})
    }

    const history = useHistory()
    return (<section className="detal-view-section">
                <div className="detal-view-container">   
                    <div className="edit-section">
                        <input className="title-textarea" defaultValue={note.title} placeholder="Title" onChange={updateNoteTitle}/>
                        <textarea className="value-textarea" placeholder="You can write here..." defaultValue={note.value} onChange={setValue}></textarea>
                    </div>
                    <div className="button-container">
                        <button onClick={updateNoteValue} disabled={saveButtonStatus}>Save</button>
                        <button onClick={copyText}>Copy Text</button>
                        <button>Delete</button>
                        <button onClick={()=>{history.push("/")}}>Back</button>
                    </div>
                </div>
            </section>)
}