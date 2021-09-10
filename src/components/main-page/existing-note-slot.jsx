import {
    Link
  } from "react-router-dom";

  import { FiClipboard } from "react-icons/fi";
  import {FaTwitter, FaFacebook } from "react-icons/fa";
  import "../../styles/css/existing-note-slot.css"

export const ExistingNoteSlot = ({data}) => {
    const {id, title, value, date} = data
    const iconSize = 32
    return (
            <Link to="/detal-view" onClick={()=>{console.log(title)}}>
                <section className="slot">
                    <h3>{title}</h3>
                    <p>{value}</p>
                    <h6>{date}</h6>
                    <div>
                        <FaTwitter size={iconSize}/>
                        <FaFacebook size={iconSize}/>
                        <FiClipboard size={iconSize}/>
                    </div>
                </section>
            </Link>
    )
}