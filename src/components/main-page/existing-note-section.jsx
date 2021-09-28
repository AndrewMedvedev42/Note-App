import {Link} from "react-router-dom";
import styled from 'styled-components';
  import { FiClipboard } from "react-icons/fi";
  import { MdModeEdit } from "react-icons/md";
  import "../../styles/css/existing-note-slot.css"
  import firebase from "../../util/firebase";
import { useEffect, useState } from "react";

export const ExistingNoteSection = () => {

    const [arrayOfNotes, setArrayOfNotes] = useState([])

    useEffect(()=>{
        const fireRef = firebase.database().ref("List-Of-Notes")
        fireRef.on("value", (snapshot)=>{
            const ListOfnotes = snapshot.val()
            const array = []
            for (let id in ListOfnotes) {
                array.unshift(ListOfnotes[id])
            }
            setArrayOfNotes(array)
        })
    },[])

    const iconSize = 32
    return (<section className="existing-Note-Container">  
        {
            arrayOfNotes.map((item)=>{
                const {date, title, id, value} = item
                return (
                
                    <div className="slot">
                        <article>
                            <h4>{date}</h4>
                            <h1>{title}</h1>
                            <p>{value}</p>
                        </article>
                        <div className="icons-container">
                            <FiClipboard size={iconSize}/>
                            {/* <HyperLink to={`/detal-view/${id}`} onClick={()=>{console.log(title)}}>
                                <MdModeEdit size={iconSize}/>
                            </HyperLink> */}
                        </div>
                    </div>
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