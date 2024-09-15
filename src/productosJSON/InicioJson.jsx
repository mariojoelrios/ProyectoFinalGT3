import { InicioJSON } from "./InicioProducts";
import productosInicio from "../productoIni.json"
import "./inicioproductos.css"
import { Link } from "react-router-dom";

export function Iniciojson() {
    return (
        <Link to="/Products" className="Link2">
            <div className="products">
                {
                    productosInicio.map((element, key) => {
                        return (<InicioJSON
                            key={key}
                            id={element.id}
                            nombre={element.nombre}
                            desc={element.descripcion}
                            img={element.imagen}
                        />)
                    })
                }
            </div>
        </Link>
    )
}