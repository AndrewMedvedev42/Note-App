import {useLocation, useHistory} from "react-router-dom"
import "../styles/css/detal-view-page.css"
// import db from "../util/firebase";

export const DetalView = () => {

    const location = useLocation()
    const noteID = location.pathname.split("/")[2]
    const noteObject = JSON.parse(localStorage.getItem(noteID))

    const history = useHistory()

    return (<section className="detal-view-section">
                <div className="detal-view-container">   
                    <div className="edit-section">
                        <input className="title-textarea" placeholder="Title"/>
                        <textarea className="value-textarea" placeholder="title">{noteObject.value}</textarea>
                    </div>
                    <div className="button-container">
                        <button>Save</button>
                        <button>Copy Text</button>
                        <button>Delete</button>
                        <button onClick={()=>{history.push("/")}}>Back</button>
                    </div>
                </div>
            </section>)
}