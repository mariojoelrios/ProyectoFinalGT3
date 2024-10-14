import { ProductoReal } from "../../productosJSON/Productos-Productos/ProductoReal"
import { Carrusel } from "../../components/carrusel/Carrusel"
import "../Productos/Products.css"

export function Products() {
    return (
        <>
            <Carrusel />
            <div>
                <h1>Productos</h1>
                <div className="div1">
                    <div className="div2">
                        <p>
                            Bienvenido a nuestra sección de productos. Aquí podrás explorar una selección de lo que tenemos disponible. Ten en cuenta que aún no contamos con tienda online, por lo que esta sección es únicamente para mostrarte nuestros artículos y sus características. Si algo te interesa o necesitas más información, no dudes en contactarnos. Estaremos encantados de ayudarte con detalles sobre precios, disponibilidad y formas de compra. ¡Gracias por tu interés en nuestros productos!
                        </p>
                    </div>
                </div>
            </div>
            <ProductoReal />
        </>
    )
}