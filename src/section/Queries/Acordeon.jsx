import { useState } from "react"

const Acordeon = ({ titulo, conten }) => {
    const [open, setOpen] = useState(false)

    const abrirAcordeon = () => {
        setOpen((prevOpen) => !prevOpen)
    }
    return (
        <div className="acordeon-item">
            <button className="acordeon_titulo" onClick={abrirAcordeon}>
                {titulo}
            </button>
            {open && <div className="acordeon-conten">{conten}</div>}
        </div>
    )
}

export default Acordeon
