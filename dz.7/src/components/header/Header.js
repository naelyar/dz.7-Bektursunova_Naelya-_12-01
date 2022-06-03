import {NavLink} from "react-router-dom"
function Header() {
    return (
        <div>
        <h1>Header</h1>
        <NavLink to="/">FirstPage</NavLink>
        <NavLink to="/second">SecondPage</NavLink>
        <NavLink to="/third">ThirdPage</NavLink>

        </div>
    )
}

export default Header;