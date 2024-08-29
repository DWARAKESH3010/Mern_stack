import { NavLink } from "react-router-dom"

function Header(){
    return(
        <div>
            <ol>
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
            </ol>
        </div>
    )
}

export default Header