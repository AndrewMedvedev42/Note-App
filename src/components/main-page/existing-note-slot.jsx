import {Link} from "react-router-dom";
import styled from 'styled-components';
  import { FiClipboard } from "react-icons/fi";
  import { MdModeEdit } from "react-icons/md";
  import "../../styles/css/existing-note-slot.css"


export const ExistingNoteSlot = ({data}) => {

    const {id, title, value, date} = data
    const iconSize = 32
    return (<>  
                    <section className="slot">
                        <article>
                            <h4>{date}</h4>
                            <h1>{title}</h1>
                            <p>{value}</p>
                        </article>
                        <div className="icons-container">
                            <FiClipboard size={iconSize}/>
                            <HyperLink to={`/${id}`} onClick={()=>{console.log(title)}}>
                                <MdModeEdit size={iconSize}/>
                            </HyperLink>
                        </div>
                    </section>
    </>)
}

const HyperLink = styled(Link)`
    text-decoration: none;
    color:black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;