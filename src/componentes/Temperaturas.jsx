import "../App.css";

function Temperaturas(props) {


    return (
        <div className='temperaturas'>
            <div className='temperaturaMaxima'>{props.temperaturaMaxima} |</div>
            <div className='temperaturaMinima'>| {props.temperaturaMinima} </div>
        </div>
    );
}

export default Temperaturas;