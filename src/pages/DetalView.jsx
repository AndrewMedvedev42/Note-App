import {useLocation, useHistory} from "react-router-dom"

export const DetalView = () => {

    const location = useLocation()
    const noteID = location.pathname.split("/")[2]
    const noteObject = JSON.parse(localStorage.getItem(noteID))

    const history = useHistory()

    return (<section>
                <div>   
                    <div>
                        <textarea placeholder="title">{noteObject.title}</textarea>
                        <textarea placeholder="title">{noteObject.value}</textarea>
                    </div>
                    <div>
                    <button>Save</button>
                    <button>Copy Text</button>
                    <button>Delete</button>
                    </div>
                </div>
            </section>)
}