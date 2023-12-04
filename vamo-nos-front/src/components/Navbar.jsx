import { Link } from "react-router-dom";
import "./components-styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="m-0">
                <Link to={`/`}>VamoNos</Link>
            </h2>
            <ul>
                <li>
                <Link to={`/home`} className="new-btn">Home</Link>
                </li>
                <li>
                    <Link to={`/sobre`} className="new-btn">Sobre</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;