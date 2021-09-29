import {useLocation, useHistory} from "react-router-dom"
import "../styles/css/detal-view-page.css"
import firebase from "../util/firebase";
import { useEffect, useState } from "react";

export const DetalView = () => {

    const [note, setNote] = useState({})

    const [deleteMessageStatus, setDeleteMessageStatus] = useState(false)

    const location = useLocation()
    const history = useHistory()
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

    const updateNoteValue = (e) => {
        fireRef.child(noteID).update({'value': e.target.value})
    }

    const updateNoteTitle = (e) => {
        fireRef.child(noteID).update({'title': e.target.value})
    }

    const deleteNote = (e) => {
        firebase.database().ref("List-Of-Notes").child(e).remove()
        history.push('/')

    }
    return (<>
        {deleteMessageStatus && (
            <section className="deleteMessage">
                <div className="messageContainer">
                    <h1>Warning</h1>
                    <p>Are you sure you want to delete this note?</p>
                    <div>
                        <button className="delete-button" stype="submit" onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus); deleteNote(noteID)}}>Delete</button>
                        <button type="submit" onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus)}}>Back</button>
                    </div>
                </div>
            </section>
        )}
        <section className="detal-view-section">
                <div className="detal-view-container">   
                    <div className="edit-section">
                        <input className="title-textarea" defaultValue={note.title} placeholder="Title" onChange={updateNoteTitle}/>
                        <textarea className="value-textarea" placeholder="You can write here..." defaultValue={note.value} onChange={updateNoteValue}></textarea>
                    </div>
                    <div className="button-container">
                        <button onClick={copyText}>Copy Text</button>
                        <button onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus)}}>Delete</button>
                        <button onClick={()=>{history.push("/")}}>Back</button>
                    </div>
                </div>
            </section>
    </>)
}