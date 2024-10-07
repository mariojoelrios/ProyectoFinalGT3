import { ProductoRealCard } from "./ProductoRealCadr"
import productosreal from "../../productosReales.json"
import "./productoReal.css"

export function ProductoReal() {
    return (
        <div className="products">
            {
                productosreal.map((element, key) => {
                    return (<ProductoRealCard
                        key={key}
                        id={element.id}
                        nombre={element.nombre}
                        desc={element.descripcion}
                        img={element.imagen}
                    />)
                })
            }
        </div>
    )
}