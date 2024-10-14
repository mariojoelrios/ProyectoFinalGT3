import "./Inicio.css"
import { Link } from "react-router-dom"

export function Seccion_Inicio2() {
    return (
        <>
            <section className="Section_2">
                <div>
                    <p className="parrafo1">
                        Tenemos socios en todo el pais, con empresas de distribucion en todo el mundo, como:
                    </p>
                </div>
            </section>
            <div className="empresas">
                <Link to="https://www.secheep.gob.ar/">
                    <img src="/img/iconoSECHEEP.png" alt="" />
                </Link>

                <Link to="https://www.epm.com.co/clientesyusuarios/energia/">
                    <img src="/img/iconoEPM.png" alt="" />
                </Link>

                <Link to="https://eletrobras.com/pt/Paginas/Home.aspx">
                    <img src="/img/iconoElectrobras.png" alt="" />
                </Link>

                <Link to="https://www.edesur.com.ar/">
                    <img src="/img/iconoEdesur.png" alt="" />
                </Link>

                <Link to="https://www.edenor.com/">
                    <img src="/img/iconoEdenor.png" alt="" />
                </Link>

                <Link to="https://www.edelap.com.ar/">
                    <img src="/img/iconoEDELAP.png" alt="" />
                </Link>
            </div>
            <section>
                <h2 className="Section_2">
                    Acercate a una de nuestras sucursales
                </h2>
                <p className="parrafo">
                    Feedback Electric cuenta con sucursales estratégicamente ubicadas en todo el territorio argentino. Nos puedes encontrar en Buenos Aires, Córdoba, Rosario, Mendoza y Resistencia, donde brindamos servicios de calidad y atención personalizada. Cada sucursal está equipada con tecnología de punta y un equipo de expertos listos para ayudarte con todas tus necesidades eléctricas. ¡Visítanos en la ubicación más cercana a ti!
                </p>
            </section>
            <div className="centrado">
                <div className="form-contenedor">
                    <h2>Formulario de Contacto</h2>
                    <form action="https://formspree.io/f/mvgpnjjn" method="POST">
                        <div className="form-grupo">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" required />
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-grupo">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" rows="5" required></textarea>
                        </div>
                        <button className="bottomEnv1" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
}