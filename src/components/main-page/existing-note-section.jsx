import {Link} from "react-router-dom";
import styled from 'styled-components';
  import { FiClipboard } from "react-icons/fi";
  import { MdModeEdit } from "react-icons/md";
  import "../../styles/css/existing-note-slot.css"
  import firebase from "../../util/firebase";
import { useEffect, useState } from "react";
import {AiFillDelete} from "react-icons/ai";

export const ExistingNoteSection = () => {

    const [arrayOfNotes, setArrayOfNotes] = useState([])
    const [deleteMessageStatus, setDeleteMessageStatus] = useState(false)

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

    const deleteNote = (e) => {
        return firebase.database().ref("List-Of-Notes").child(e).remove();
    }

    function copyText(e) {
        const el = document.querySelector(`#text-${e}`);
        el.select()
        document.execCommand("copy")
    }

    const iconSize = 32
    return (<section className="existing-Note-Container">  
        {
            arrayOfNotes.map((item)=>{
                const {date, title, id, value, itemKey} = item
                return (<>
                    {deleteMessageStatus && (
                        <section className="deleteMessage">
                            <div className="messageContainer">
                                <h1>Warning</h1>
                                <p>Are you sure you want to delete this note?</p>
                                <div>
                                    <button className="delete-button" stype="submit" onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus); deleteNote(itemKey)}}>Delete</button>
                                    <button type="submit" onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus)}}>Back</button>
                                </div>
                            </div>
                        </section>
                        )}
                    <div key={id} className="slot">
                        <article>
                            <h4>{date}</h4>
                            <h1>{title}</h1>
                            <textarea id={`text-${id}`} readOnly defaultValue={value}></textarea>
                        </article>
                        <div className="icons-container">
                            <FiClipboard onClick={()=>{copyText(id)}} size={iconSize}/>
                            <HyperLink to={`/detal-view/${itemKey}`}>
                                <MdModeEdit size={iconSize}/>
                            </HyperLink>
                            <AiFillDelete size={34} onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus)}}/>
                        </div>
                    </div></>
                )
            })}
    </section>)
}

const HyperLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;