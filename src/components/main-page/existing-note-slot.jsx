import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export const ExistingNoteSlot = ({data}) => {
    const {id, title, value, date} = data
    return (
            <Link to="/detal-view" onClick={()=>{console.log(title)}}>
                <section>
                    <h3>{title}</h3>
                    <p>{value}</p>
                    <h6>{date}</h6>
                    <div>
                        <img src="#"/>
                        <img src="#"/>
                        <img src="#"/>
                    </div>
                </section>
            </Link>
    )
}