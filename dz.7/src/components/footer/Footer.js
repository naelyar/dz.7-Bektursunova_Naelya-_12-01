import {NavLink} from "react-router-dom"
function Footer() {
    return (
        <div>
        <h1>Footer</h1>

         <NavLink to="/">FirstPage</NavLink>
        <NavLink to="/second">SecondPage</NavLink>
        <NavLink to="/third">ThirdPage</NavLink>


        </div>
    )
}

export default Footer;