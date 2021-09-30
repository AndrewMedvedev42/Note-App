import {Link} from "react-router-dom";
import styled from 'styled-components';
  import { FiClipboard } from "react-icons/fi";
  import { MdModeEdit } from "react-icons/md";
  import "../../styles/css/existing-note-slot.css"
  import firebase from "../../util/firebase";
import { useEffect, useState } from "react";
import {AiFillDelete} from "react-icons/ai";
import { Textfit } from 'react-textfit';

export const ExistingNoteSection = () => {

    const [arrayOfNotes, setArrayOfNotes] = useState([])
    // const [deleteMessageStatus, setDeleteMessageStatus] = useState(false)

    useEffect(()=>{
        const fireRef = firebase.database().ref("List-Of-Notes")
        fireRef.on("value", (snapshot)=>{
            const ListOfnotes = snapshot.val()
            const array = []
            for (let id in ListOfnotes) {
                ListOfnotes[id].itemKey = id
                array.unshift(ListOfnotes[id])
            }
            setArrayOfNotes(array)
        })
    },[])

    console.log(arrayOfNotes);

    const deleteNote = (e) => {
        if (window.confirm(`Delete this note?`)) {
            firebase.database().ref("List-Of-Notes").child(e).remove();
          }
    }

    function copyText(e) {
        const el = document.querySelector(`#text-${e}`);
        el.select()
        document.execCommand("copy")
    }

    const iconSize = 32
    return (<section className="existing-Note-Container">  
        {arrayOfNotes.length ? (
            arrayOfNotes.map((item)=>{
                const {date, title, id, value, itemKey, note_color} = item
                return (<>
                    <div key={id} style={{backgroundColor:note_color}} className="slot">
                        <article>
                        <h6>{date}</h6>
                        <Textfit className="note-title" mode="multi">
                            {title}
                        </Textfit>
                            <textarea id={`text-${id}`} readOnly defaultValue={value} style={{backgroundColor:note_color}}></textarea>
                        </article>
                        <div className="icons-container">
                            <FiClipboard style={{cursor:"pointer"}} onClick={()=>{copyText(id)}} size={iconSize}/>
                            <HyperLink to={`/detal-view/${itemKey}`}>
                                <MdModeEdit size={iconSize}/>
                            </HyperLink>
                            <AiFillDelete style={{cursor:"pointer"}} onClick={()=>{deleteNote(itemKey)}} size={34}/>
                        </div>
                    </div></>
                )
            })
        ) : <h1>Sorry, you have no notes!</h1>}
    </section>)
}

const HyperLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;