import Acordeon from "./Acordeon";
import "../Queries/Queries.css"

export function Queries() {
    return (
        <div className="acordeon">
            <h1>
                Preguntas Frecuentes
            </h1>

            <Acordeon
                titulo="¿Cómo puedo saber si un producto es adecuado para mis necesidades?"
                conten="Cada producto en nuestra tienda viene con descripciones detalladas y especificaciones. Si tienes dudas, nuestro equipo está disponible para ayudarte a elegir el mejor producto."
            />

            <Acordeon
                titulo="¿Ofrecen garantía en sus productos?"
                conten="Sí, todos nuestros productos cuentan con garantía. La duración y las condiciones varían según el fabricante."
            />

            <Acordeon
                titulo="¿Qué métodos de pago aceptan?"
                conten="Aceptamos diversas formas de pago, incluyendo tarjetas de crédito, débito, transferencias bancarias y pagos en efectivo a través de plataformas asociadas."
            />

            <Acordeon
                titulo="¿Cómo puedo devolver un producto si no estoy satisfecho?"
                conten="Contamos con una política de devolución. Si no estás satisfecho, puedes devolver el producto dentro de un plazo específico para recibir un reembolso o un cambio."
            />

            <Acordeon
                titulo="¿Ofrecen asesoramiento sobre instalación de productos?"
                conten="Sí, proporcionamos asesoría sobre la instalación y uso de nuestros productos. Si necesitas ayuda adicional, podemos recomendarte técnicos calificados."
            />

            <Acordeon
                titulo="¿Hay descuentos o promociones disponibles?"
                conten="Regularmente ofrecemos descuentos y promociones. Suscríbete a nuestro boletín para recibir las últimas ofertas."
            />

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
                        <button className="buttomEnv" type="submit">Enviar</button>
                    </form>
                </div>
            </div>

        </div>
    )
}