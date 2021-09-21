// import {CreateNewNoteField} from "../components/main-page/create-new-note-field"
import "../styles/css/main-page.css"
import { useEffect, useState } from "react"
import {ExistingNoteSlot} from "../components/main-page/existing-note-slot"

export const MainPage = () => {

    const [noteTitle, setNoteTitle] = useState("Lorem ipsum")
    const [noteValue, setNoteValue] = useState("")

    const [noteObject, setNoteObject] = useState(null)
    const [arrayOfNotes, setArrayOfNotes] = useState([])

    const setTitle = (e) => {
        if(e.target.value === "" || e.target.value === null){
            setNoteTitle("Lorem ipsum")
        }else{
            setNoteTitle(e.target.value)
        }
        // console.log(e.target.value);
}

    const setValue = (e) => {
            // console.log(e.target.value);
            setNoteValue(e.target.value)
    }

    function idGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    const submitValue = () => {
        const date = new Date()
        const id = idGenerator()
        setNoteObject({
            id:id,
            title:noteTitle,
            value:noteValue,
            date:date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
        })
    }

    useEffect(()=>{
        if (noteObject) {
            setArrayOfNotes((prevList)=>[noteObject, ...prevList])
            localStorage.setItem(noteObject.id, JSON.stringify(noteObject));
        }else{
            console.log("did nothing");
        }
    },[noteObject])


    useEffect(()=>{
        for(let i =0; i<localStorage.length; i++){
          let key = localStorage.key(i)
      
          if(arrayOfNotes.some((item)=> item === key)){
            console.log(`${key} already deployed!`)
      
          }else{
            var aValue = JSON.parse(localStorage.getItem(key))
            console.log(aValue);
            setArrayOfNotes((prevList)=>[...prevList,aValue])
      
          }}
      },[])

    return (
        <section className="main-Container">
            <section className="input-Section">
                <div className="input-Container">
                    <h1 className="title">Create New Note</h1>
                    <div>
                        <input placeholder="Title" type="text" onChange={setTitle}/>
                        <textarea placeholder="Your Text" type="text" onChange={setValue}/>
                        <button type="submit" onClick={submitValue}>Submit</button>
                    </div>
                </div>
            </section>
            <section className="existing-Note-Container">
                {arrayOfNotes.length ? (
                    arrayOfNotes.map((item)=>{
                        return <ExistingNoteSlot data={item}/>
                    })
                ) :<h1>Sorry, no notes</h1>}
            </section>
        </section>
    )
}