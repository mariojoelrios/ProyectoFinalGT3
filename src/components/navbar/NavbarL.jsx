import { useState } from "react"
import { Link } from "react-router-dom"
import "../componentes/NavbarL.css"

export function Navbar () {
    const [menuOpen, setMenuOpen] = useState(false)

    const responsMenu = () => {
        setMenuOpen(!menuOpen)
    }
    
    return (
        <>
            <nav className="navbar">
                <div className={`cosas ${menuOpen ? "true" : "false"}`}>
                    <Link className="Link" to="/">HOME</Link>
                    <Link className="Link" to="/About">ABOUT</Link>
                    <Link className="Link" to="/Products">PRODUCTS</Link>
                    <Link className="Link" to="/Queries">QUERIES</Link>
                </div>

                <div className={`menu-respons ${menuOpen ? "true" : "false"}`} onClick={responsMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    )
}