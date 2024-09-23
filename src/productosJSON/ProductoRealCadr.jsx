import "./productoRealCard.css"

export function ProductoRealCard({ img, nombre, desc }) {
    return (
        <>
            <div className="productos">
                <div className="productos-img">
                    <img src={img} alt={nombre} />
                </div>
                <div className="productos-body">
                    <h1 className="productos-titulo">{nombre}</h1>
                    <p className="productos-descripcion">{desc}</p>
                </div>
            </div>
        </>
    )
}