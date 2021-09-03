// import {CreateNewNoteField} from "../components/main-page/create-new-note-field"
import { useEffect, useState } from "react"
import {ExistingNoteSlot} from "../components/main-page/existing-note-slot"

export const MainPage = () => {

    const [noteTitle, setNoteTitle] = useState("")
    const [noteValue, setNoteValue] = useState("")

    const [noteObject, setNoteObject] = useState(null)
    const [arrayOfNotes, setArrayOfNotes] = useState([])

    const setTitle = (e) => {
        // console.log(e.target.value);
        setNoteTitle(e.target.value)
}

    const setValue = (e) => {
            // console.log(e.target.value);
            setNoteValue(e.target.value)
    }

    const submitValue = () => {
        const date = new Date()
        setNoteObject({
            title:noteTitle,
            value:noteValue,
            date:date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
        })

    }

    useEffect(()=>{
        if (noteObject) {
            setArrayOfNotes((prevList)=>[noteObject, ...prevList])
        }else{
            console.log("did nothing");
        }
    },[noteObject])


    return (
        <section>
            <section>
                <div>
                    <h3>Create New Note</h3>
                    <div>
                        <input type="text" onChange={setTitle}/>
                        <textarea type="text" onChange={setValue}/>
                        <button type="submit" onClick={submitValue}>Submit</button>
                    </div>
                </div>
            </section>
            {arrayOfNotes.length ? (
                arrayOfNotes.map((item)=>{
                    return <ExistingNoteSlot data={item}/>
                })
            ) :<h1>Sorry, no notes</h1>}
        </section>
    )
}