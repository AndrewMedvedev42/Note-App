import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export const ExistingNoteSlot = ({data}) => {
    const {title, value, date} = data
    return (
        // <Router>
        //     <Link to="/detal-view">
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
        //     </Link>
        // </Router>
    )
}