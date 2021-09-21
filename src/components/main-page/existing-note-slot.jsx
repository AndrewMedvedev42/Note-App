import {Link} from "react-router-dom";
import styled from 'styled-components';
import {useState } from "react"

    import FadeIn from 'react-fade-in';
  import { FiClipboard } from "react-icons/fi";
  import {FaTwitter, FaFacebook } from "react-icons/fa";
  import {AiFillDelete} from "react-icons/ai";
  import "../../styles/css/existing-note-slot.css"

export const ExistingNoteSlot = ({data}) => {

    const [deleteMessageStatus, setDeleteMessageStatus] = useState(false)

    const {id, title, value, date} = data
    const iconSize = 32
    return (<>
            {deleteMessageStatus && (
                <section className="deleteMessage">
                    <FadeIn>
                    <div className="messageContainer">
                        <h1>Warning</h1>
                        <p>Are you sure you want to delete this note?</p>
                        <div>
                            <button className="delete-button" type="submit">Delete</button>
                            <button type="submit" onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus)}}>Back</button>
                        </div>
                    </div>
                    </FadeIn>
                </section>
            )}
            <HyperLink to={`/${id}`} onClick={()=>{console.log(title)}}>
                <section className="slot">
                    <article>
                        <h4>{date}</h4>
                        <h1>{title}</h1>
                        <p>{value}</p>
                    </article>
                    <div className="icons-container">
                        <FaTwitter size={iconSize}/>
                        <FaFacebook size={iconSize}/>
                        <FiClipboard size={iconSize}/>
                        <AiFillDelete onClick={()=>{setDeleteMessageStatus(!deleteMessageStatus)}} size={iconSize}/>
                    </div>
                </section>
            </HyperLink>
    </>)
}

const HyperLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;