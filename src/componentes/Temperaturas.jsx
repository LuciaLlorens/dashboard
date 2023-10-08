import "../App.css";

function Temperaturas(props) {


    return (
        <div className='temperaturas'>
            <div className='temperaturaMaxima'>{props.temperaturaMaxima}{props.unidadMedidaTemperaturaMaxima} |</div>
            <div className='temperaturaMinima'>| {props.temperaturaMinima}{props.unidadMedidaTemperaturaMinima} </div>
        </div>
    );
}

export default Temperaturas;