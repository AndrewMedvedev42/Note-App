import {Link} from "react-router-dom";
import styled from 'styled-components';

  import { FiClipboard } from "react-icons/fi";
  import {FaTwitter, FaFacebook } from "react-icons/fa";
  import "../../styles/css/existing-note-slot.css"

export const ExistingNoteSlot = ({data}) => {
    const {id, title, value, date} = data
    const iconSize = 32
    return (
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
                    </div>
                </section>
            </HyperLink>
    )
}

const HyperLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;