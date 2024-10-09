import "./Inicio.css"
import "../../components/Fonts.css"
import { Section_Inicio } from "./Seccion_Inicio"
import { Seccion_Inicio2 } from "./Seccion_Inicio2"

export function Inicio() {
    return (
        <>
            <div className="centrar">
                <div className="videoContainer">
                    <video autoPlay loop muted>
                        <source src="/video/HeroFeedback4.mp4" type="video/mp4" />
                        El video no es compatible con tu dispositivo.
                    </video>
                </div>
            </div>
            <Section_Inicio />
            <Seccion_Inicio2 />
        </>
    );
}