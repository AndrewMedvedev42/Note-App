import "../styles/css/navigation-bar.css"
import { BsFillGearFill } from "react-icons/bs";
import { BiNotepad } from "react-icons/bi";

export const NavigationBar = () => {
    return (
        <nav className="navContainer">
            <BiNotepad size={64}/>
            <div>
                <BsFillGearFill size={32}/>
                <span>Settings</span>
            </div>
        </nav>
    )
}