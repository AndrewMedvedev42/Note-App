// import {CreateNewNoteField} from "../components/main-page/create-new-note-field"
import "../styles/css/delete-message.css"
import "../styles/css/main-page.css"
import { useState } from "react"
import firebase from "../util/firebase";
import {ExistingNoteSection} from "../components/main-page/existing-note-section"
// import FadeIn from 'react-fade-in';


export const MainPage = () => {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteValue, setNoteValue] = useState("")

    const setTitle = (e) => {
            setNoteTitle(e.target.value)
    }

    const setValue = (e) => {
            setNoteValue(e.target.value)
    }

    function idGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    const getDate = () => {
        const date = new Date()
        return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
    }

    const submitValue = () => {
        const fireRef = firebase.database().ref("List-Of-Notes")
        const data = {
            id:idGenerator(),
            title:noteTitle,
            value:noteValue,
            date:getDate(),
            note_color:""
        }
        fireRef.push(data)
    }

    return (
        <section className="main-Container">
            <section className="input-Section">
                <div className="input-Container">
                    <div>
                        <div className="inputFields">
                            <input placeholder="Title" type="text" onChange={setTitle}/>
                            <textarea placeholder="Type text here..." type="text" onChange={setValue}/>
                        </div>
                        <button type="submit" onClick={submitValue}>Submit</button>
                    </div>
                </div>
            </section>
            <ExistingNoteSection/>
        </section>
    )
}