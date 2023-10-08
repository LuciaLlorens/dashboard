import "../App.css";
//para llamar desde este componente todo lo que tiene api
import api from '../api.json';
import SalidaSol from '../img/SalidaSol.png';
import PuestaSol from '../img/PuestaSol.png';

function CuadroBloques() {
  //extraigo de api.json los horarios de salida y puesta de sol
  const horaSalidaSol = new Date(api.daily.sunrise).getHours();
  const minutosSalidaSol = new Date(api.daily.sunrise).getMinutes();
  const horaPuestaSol = new Date(api.daily.sunset).getHours();
  const minutosPuestaSol = new Date(api.daily.sunset).getMinutes();
  const indiceCalidadAire = api.hourly.european_aqi[0];
  //lo hago con variables y no con estados para prevenir los problemas por demasiados renderizados (ya lo había intentado, je)
  let calidadDelAire = "";
  let humedad = "";

  //establezco condiciones para que se muestre am o pm según si es más del mediodía o no
  const obtenerPeriodo = (hora) => {
    return hora >= 12 ? "PM" : "AM";
  };

  if (api.hourly.relativehumidity_2m < 60) {
    humedad = "normal";
  } else {
    humedad = "alta";
  };
  
  //Como está medido en metros, convierto a km
  const convertirMetrosAKilometros = (metros) => {
    return (metros / 1000).toFixed(2); // Redondeamos a 2 decimales
  };

  // Determinar la calidad del aire según el índice
  if (indiceCalidadAire <= 50) {
    calidadDelAire = "buena";
  } else if (indiceCalidadAire <= 100) {
    calidadDelAire = "moderada";
  } else if (indiceCalidadAire <= 150) {
    calidadDelAire = "no muy saludable";
  } else if (indiceCalidadAire <= 200) {
    calidadDelAire = "no saludable";
  } else {
    calidadDelAire = "para nada saludable";
  };

    return (
        <div className='cuadroBloques'>
              <div className='primeraFila'>
                <div className='bloques'>
                  <p className="titulosBloques"> índice UV </p>
                  {/*Llamo desde api a indice UV*/}
                  <p> {api.daily.uv_index_max} </p>
                </div>
                <div className='bloques'> 
                  <p className="titulosBloques"> Estado del viento </p>
                  {/*Llamo desde api al estado del viento y su unidad de medida*/}
                  <p> {api.current_weather.windspeed}{api.daily_units.windspeed_10m_max} </p>
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
                  <p> {api.hourly.relativehumidity_2m[0]}{api.hourly_units.relativehumidity_2m} </p>
                  <p> {humedad} </p>
                </div>
                <div className='bloques'>
                  <p className="titulosBloques"> Visibilidad </p>
                  <p> {convertirMetrosAKilometros(api.hourly.visibility[0])}km </p>
                  <p> buena </p>
                </div>
                <div className='bloques'>
                  <p className="titulosBloques"> Calidad del aire </p>
                  <p> {api.hourly.european_aqi[0]} </p>
                  <p> {calidadDelAire} </p>
               </div>
              </div>
            </div>
    );
}

export default CuadroBloques;