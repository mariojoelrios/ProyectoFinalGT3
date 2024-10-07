import "./Footer.css"
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-contenedor">
                    <div className="footer-logo">
                        <h2>Feedback Electric</h2>
                    </div>
                    <div className="footer-info">
                        <p className="footer-dire">Av. Chaco 1240</p>
                        <p className="footer-celu">3624-123456</p>
                    </div>
                    <div className="footer-social">
                       <Link to="https://discord.com/">
                            <img src="/img/discord.png" alt="" />
                       </Link>
                       <Link to="https://github.com/mariojoelrios">
                            <img src="/img/github.png" alt="" />
                       </Link>
                       <Link to="https://www.instagram.com/">
                            <img src="/img/instragram.png" alt="" />
                       </Link>
                    </div>
                </div>
            </footer>

        </>
    )
}