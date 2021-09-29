import {useLocation, useHistory} from "react-router-dom"
import "../styles/css/detal-view-page.css"
import firebase from "../util/firebase";
import { useEffect, useState } from "react";

export const DetalView = () => {

    const [note, setNote] = useState({})

    const location = useLocation()
    const noteID = location.pathname.split("/")[2]

    useEffect(()=>{
        const fireRef = firebase.database().ref("List-Of-Notes")
        fireRef.on("value", (snapshot)=>{
            const ListOfnotes = snapshot.val()
            for (let id in ListOfnotes) {
                if(id === noteID){
                    setNote(ListOfnotes[id])
                }
            }
        })
    },[])

    const history = useHistory()
    return (<section className="detal-view-section">
                <div className="detal-view-container">   
                    <div className="edit-section">
                        <input className="title-textarea" defaultValue={note.title} placeholder="Title"/>
                        <textarea className="value-textarea" placeholder="You can write here..." defaultValue={note.value}></textarea>
                    </div>
                    <div className="button-container">
                        <button>Save</button>
                        <button>Copy Text</button>
                        <button>Delete</button>
                        <button onClick={()=>{history.push("/")}}>Back</button>
                    </div>
                </div>
            </section>)
}