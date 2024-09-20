import "./Inicio.css"
import { Iniciojson } from "../productosJSON/InicioJson"

export function Section_Inicio() {
    return (
        <>
            <section className="Section_1">
                <h1>Feedback Electric</h1>
                <div className="centradoParrafo">
                    <div className="contenedorParrafo">
                        <p className="parrafo">
                            Somos la empresa elite en el negocio de productos e indumentaria eléctrica. <br />
                            Desde 1940 dando lo mejor a nuestros clientes. <br />
                            Ten por seguro que aquí encontrarás los mejores precios, productos y atención, que en cualquier otro lugar. <br />
                            <br />
                            Mira algunos de nuestros productos...
                        </p>
                    </div>
                </div>
                <div className="productos">
                    <h2>Productos</h2>
                </div>
                <Iniciojson />
                <div>
                    <h2>
                        Aparatos de protección personal
                    </h2>
                    <p className="parrafo1">
                        En Feedback Electric, fabricamos equipos de protección personal diseñados para garantizar la seguridad de los profesionales que trabajan con energía eléctrica. Nuestros productos cumplen con los más altos estándares de calidad y seguridad, protegiendo contra riesgos eléctricos en todo tipo de entornos industriales.
                    </p>
                    <h2>
                        Equipos de medición de energía
                    </h2>
                    <p className="parrafo1">
                        Desarrollamos soluciones avanzadas para la medición precisa de energía eléctrica. En Feedback Electric, nuestros instrumentos de medición están diseñados para proporcionar lecturas exactas y confiables, facilitando la gestión eficiente del consumo y distribución de energía.
                    </p>
                    <h2>
                        Sistemas de transporte de energía
                    </h2>
                    <p className="parrafo1">
                        Somos expertos en la creación de sistemas para el transporte seguro y eficiente de energía eléctrica. Nuestros productos están diseñados para soportar altas cargas y asegurar una transmisión estable de energía, adaptándose a diferentes entornos y necesidades industriales.
                    </p>
                </div>
            </section>
        </>
    )
}
