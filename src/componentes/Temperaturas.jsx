import "../App.css";
import Dia from "../img/Dia.svg";
import Noche from "../img/Noche.svg";

function Temperaturas({temperaturaMaxima, temperaturaMinima, unidadMedidaTemperaturaMaxima, unidadMedidaTemperaturaMinima, cargando, esDeDia}) {
    if (cargando) {
        return (
              <h2>Cargando</h2>
        )
  } else {
    return (
        <div className={`temperaturas ${esDeDia ? "temperaturaDiurna" : "temperaturaNocturna"}`}>
            <div className="primerCuadro">
                <div className="primeraLinea">
                    <div className='temperaturaMaxima'>{temperaturaMaxima}{unidadMedidaTemperaturaMaxima}</div>
                </div>
                <div className="segundaLinea">
                    <p> Máxima </p>
                    <img className="dia" src={Dia} alt="Día"></img>
                </div>
            </div>
            <div className="segundoCuadro">
                <div className="primeraLinea">
                    <div className='temperaturaMinima'>{temperaturaMinima}{unidadMedidaTemperaturaMinima}</div>
                </div>
               <div className="segundaLinea">
                    <p> Mínima </p>
                    <img className="noche" src={Noche} alt="Noche"></img>
               </div>
            </div>
        </div>
    );
  }  
}

export default Temperaturas;