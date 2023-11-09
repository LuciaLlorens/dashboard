import './App.css';
import { useState, useEffect } from 'react';
import Termometro from './componentes/Termometro';
import DiaYHorario from './componentes/DiaYHorario';
import Temperaturas from './componentes/Temperaturas';
import CuadroBloques from './componentes/CuadroBloques';
import CuadroTemperatura from './componentes/CuadroTemperatura';
import Transporte from './componentes/Transporte';

function App() {

  const [apiData, setApiData] = useState({});
  const [cargando, setCargando] = useState(true);
  const apiURL = "https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1";
  const linea = "Linea";

  useEffect(() => {
    setCargando(true);
    fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => {
        setApiData(data);
        setCargando(false);
      })
      .catch((ex) => {
        console.error(ex);
        setCargando(false);
      });
  }, []);

  console.log(apiData);

  if (cargando) {
    return (
      <div className="contenedorCargando">
          <h2 className='cargando'>Cargando...</h2>
      </div> 
    )
  }

    return (
    <div className="App">
      <header className="App-header">
        <div className='contenedorPrincipal'>
          <div className='appClima'>
            <div className='izquierdaYDerecha'>
              <div className='izquierda'>
              <p className='lugar'>Córdoba, Argentina</p>
              {!cargando && <Termometro temperatura={apiData.current_weather.temperature} cargando={cargando}/>}
              {!cargando && <DiaYHorario time={apiData.current_weather.time} cargando={cargando}/>}
              {!cargando && <Temperaturas temperaturaMaxima={apiData.daily.temperature_2m_max} temperaturaMinima={apiData.daily.temperature_2m_min}
                unidadMedidaTemperaturaMaxima={apiData.daily_units.temperature_2m_max} unidadMedidaTemperaturaMinima={apiData.daily_units.temperature_2m_min}
                cargando={cargando}
              />}
            </div>

            <div className='derecha'>
              <div className='aspectosDestacados'> 
                <h3 className='tituloAspectosDestacados'> Aspectos destacados </h3>
                {!cargando && <CuadroBloques apiData={apiData} sunrise={apiData.daily.sunrise} sunset={apiData.daily.sunset}
                  precipitation={apiData.hourly.precipitation_probability} relativehumidity_2m={apiData.hourly.relativehumidity_2m}
                  visibility={apiData.hourly.visibility} windspeed={apiData.current_weather.windspeed}
                  uv_index_max={apiData.hourly.uv_index} cargando={cargando}
                  />
                    }
              </div>
            </div>
            </div>

            <div className='abajo'>
              <div className='temperaturaDiaria'> 
                <h3 className='hoy'> Hoy </h3>
                {!cargando && <CuadroTemperatura apiData={apiData} time={apiData.hourly.time} temperature_2m={apiData.hourly.temperature_2m} cargando={cargando}/>}
              </div>
            </div> 
          </div>
        
          <div className='appTransporte'>
            <Transporte linea={linea}/>
          </div>
        </div>  
      </header>
    </div>
  );
}
export default App;