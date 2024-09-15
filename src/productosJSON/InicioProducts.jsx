import "./producto.css"

export function InicioJSON({ img, nombre, desc }) {
    return (
        <>
            <div className="product">
                <div className="product-img">
                    <img src={img} alt={nombre} />
                </div>
                <div className="product-body">
                    <h1 className="product-title">{nombre}</h1>
                    <p className="product-description">{desc}</p>
                </div>
            </div>
        </>
    )
}