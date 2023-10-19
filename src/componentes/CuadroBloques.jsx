import "../App.css";
//para llamar desde este componente todo lo que tiene api
import SalidaSol from '../img/SalidaSol.png';
import PuestaSol from '../img/PuestaSol.png';

function CuadroBloques({cargando, sunrise, sunset, precipitation, relativehumidity_2m, visibility, windspeed, uv_index_max}) {
  //extraigo de api.json los horarios de salida y puesta de sol
  const horaSalidaSol = new Date(sunrise).getHours();
  const minutosSalidaSol = new Date(sunrise).getMinutes();
  const horaPuestaSol = new Date(sunset).getHours();
  const minutosPuestaSol = new Date(sunset).getMinutes();
  //lo hago con variables y no con estados para prevenir los problemas por demasiados renderizados (ya lo había intentado, je)
  let humedad = "";

  //establezco condiciones para que se muestre am o pm según si es más del mediodía o no
  const obtenerPeriodo = (hora) => {
    return hora >= 12 ? "PM" : "AM";
  };

  if (relativehumidity_2m < 60) {
    humedad = "normal";
  } else {
    humedad = "alta";
  };
  
  //Como está medido en metros, convierto a km
  const convertirMetrosAKilometros = (metros) => {
    return (metros / 1000).toFixed(2); // Redondeamos a 2 decimales
  };

 if (cargando) {
  return <h2>Cargando</h2>
 } else {
  return (
        <div className='cuadroBloques'>
              <div className='primeraFila'>
                <div className='bloques'>
                  <p className="titulosBloques"> índice UV </p>
                  {/*Llamo desde api a indice UV*/}
                  <p> {uv_index_max[0]} </p>
                </div>
                <div className='bloques'> 
                  <p className="titulosBloques"> Estado del viento </p>
                  {/*Llamo desde api al estado del viento y su unidad de medida*/}
                  <p> {windspeed}km/h </p>
                </div>
                <div className='bloques'> 
                  <p className="titulosBloques"> Salida y puesta del sol </p>
                  {/*muestro el horario, restándole según sea necesario (sistema 12hs, no 24hs), los minutos y si es am o pm*/}
                  <div className="columnasSol">
                    <img className="flechaSalidaSol" src={SalidaSol} alt="Salida del sol"></img>
                    <p> {horaSalidaSol > 12 ? horaSalidaSol - 12 : horaSalidaSol}:{minutosSalidaSol < 10 ? '0' : ''}{minutosSalidaSol}{obtenerPeriodo(horaSalidaSol)} </p>
                  </div>
                  <div className="columnasSol">
                    <img className="flechaPuestaSol" src={PuestaSol} alt="Puesta del sol"></img>
                    <p> {horaPuestaSol > 12 ? horaPuestaSol - 12 : horaPuestaSol}:{minutosPuestaSol < 10 ? '0' : ''}{minutosPuestaSol}{obtenerPeriodo(horaPuestaSol)} </p>
                  </div>
                </div>
              </div>
              <div className='segundaFila'>
                <div className='bloques'>
                  <p className="titulosBloques"> Humedad </p>
                  <p> {relativehumidity_2m[0]}% </p>
                  <p> {humedad} </p>
                </div>
                <div className='bloques'>
                  <p className="titulosBloques"> Visibilidad </p>
                  <p> {convertirMetrosAKilometros(visibility[0])}km </p>
                  <p> buena </p>
                </div>
                <div className='bloques'>
                  <p className="titulosBloques"> Probabilidades de precipitación </p>
                  <p> {precipitation[0]}% </p>
               </div>
              </div>
            </div>
    );
 }
  
}

export default CuadroBloques;