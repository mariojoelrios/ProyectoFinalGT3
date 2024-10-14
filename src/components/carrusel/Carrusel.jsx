import "../carrusel/Carrusel.css";
import { useState } from "react";
import releTermico from './imagen_Carrusel/releTermico_10A.jpg';
import temotripolar from './imagen_Carrusel/temotripolar.jpg';
import proteccionElectrica from './imagen_Carrusel/proteccionElectrica.jpg';
import osciloscopio from './imagen_Carrusel/osciloscopio.jpg';
import multimetro from './imagen_Carrusel/multimetro.jpg';
import proteccionPersonal from './imagen_Carrusel/proteccionPersonal.jpg';
import motorTrifasico from './imagen_Carrusel/motorTrifasico.jpg';

export function Carrusel() {
    const images = [
        releTermico,
        temotripolar,
        proteccionElectrica,
        osciloscopio,
        multimetro,
        proteccionPersonal,
        motorTrifasico
    ];

    const [seleccionIndice, setSeleccionIndice] = useState(0);

    const previous = () => {
        const nextIndex = seleccionIndice > 0 ? seleccionIndice - 1 : images.length - 1;
        setSeleccionIndice(nextIndex);
    };

    const next = () => {
        const nextIndex = seleccionIndice < images.length - 1 ? seleccionIndice + 1 : 0;
        setSeleccionIndice(nextIndex);
    };

    return (
        <>
            <div className="content">
                <div className="contenedor">
                    <img
                        src={images[seleccionIndice]}
                        alt="Imagen del carrusel"
                    />
                </div>
                <div className="contenedor1">
                    <button className="botonSlider" onClick={previous}><svg className="flechitas" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg></button>
                    <button className="botonSlider" onClick={next}><svg className="flechitas" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path></svg></button>
                </div>
            </div>
        </>

    );
}
