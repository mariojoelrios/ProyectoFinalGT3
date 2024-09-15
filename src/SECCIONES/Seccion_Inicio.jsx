import "./Inicio.css";
import { Iniciojson } from "../productosJSON/InicioJson";

export function Section_Inicio() {
    return (
        <>
            <section className="Section_1">
                <h1>Feedback Electric</h1>
                <div className="centradoParrafo">
                    <div className="contenedorParrafo">
                        <p>
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
            </section>
        </>
    );
}
