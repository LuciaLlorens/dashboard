import "../App.css";
import Dia from "../img/Dia.svg";
import Noche from "../img/Noche.svg";

function Temperaturas(props) {


    return (
        <div className='temperaturas'>
            <div className="primerCuadro">
                <div className="primeraLinea">
                    <div className='temperaturaMaxima'>{props.temperaturaMaxima}{props.unidadMedidaTemperaturaMaxima}</div>
                </div>
                <div className="segundaLinea">
                    <p> Máxima </p>
                    <img className="dia" src={Dia} alt="Día"></img>
                </div>
            </div>
            <div className="segundoCuadro">
                <div className="primeraLinea">
                    <div className='temperaturaMinima'>{props.temperaturaMinima}{props.unidadMedidaTemperaturaMinima}</div>
                </div>
               <div className="segundaLinea">
                    <p> Mínima </p>
                    <img className="noche" src={Noche} alt="Noche"></img>
               </div>
            </div>
        </div>
    );
}

export default Temperaturas;