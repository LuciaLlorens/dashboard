import { useState, useEffect } from 'react';
import './App.css';
import coordenadasCiudad from "./componentes/coordenadasCiudad.json"
import Lugar from './componentes/Lugar';
import Termometro from './componentes/Termometro';
import DiaYHorario from './componentes/DiaYHorario';
import Temperaturas from './componentes/Temperaturas';
import CuadroBloques from './componentes/CuadroBloques';
import CuadroTemperatura from './componentes/CuadroTemperatura';
import Transporte from './componentes/Transporte';

function App() {
  //acá guardo luego la apiURL
  const [apiData, setApiData] = useState({});
  const [cargando, setCargando] = useState(true);
  //lugar default al iniciar la página web
  const [lugarSeleccionadoDefault, setLugarSeleccionadoDefault] = useState("Córdoba");
  // lugarSeleccionado que luego se cambia con lo que el usario seleccione
  const [lugarSeleccionado, setLugarSeleccionado] = useState(lugarSeleccionadoDefault);
  // para posteriormente mandar información sobre si es de día o de noche, para el modo nocturno
  const [esDeDia, setEsDeDia] = useState(true);
  const linea = "Linea";
  // api de clima
  const apiURL = `https://api.open-meteo.com/v1/forecast?latitude=${coordenadasCiudad[lugarSeleccionado].latitud}&longitude=${coordenadasCiudad[lugarSeleccionado].longitud}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1`;
  // intento de modificar el tiempo
  const [tiempoLugar, setTiempoLugar] = useState("");
  
  useEffect(() => {
    // Función para cargar los datos
    const cargarDatos = () => {
      setCargando(true);
      fetch(apiURL)
        .then((resp) => resp.json())
        .then((data) => {
          setApiData(data);
          setCargando(false);
          // Determinar si es de día o de noche cuando los datos se cargan
          const ActualmenteEsDeDia = data.current_weather.is_day === 1;
          setEsDeDia(ActualmenteEsDeDia);
          // intento de determinar el horario del lugar seleccionado
          const time = data.current_weather.time;
          setTiempoLugar(time);
        })
        .catch((ex) => {
          console.error(ex);
          setCargando(false);
        });
    };

    // Llamada a cargarDatos
    cargarDatos();

    // intervalo para cargar los datos cada 31 segundos
    const intervalo = setInterval(cargarDatos, 31000);

    // se limpia el intervalo
    return () => clearInterval(intervalo);
  }, [apiURL]);

  // saqué esto porque sino hacía visualmente más disruptivo que apareciera cada vez que cambiabas un lugar el cargando. De esta forma
  // se hace automáticamente y no complica la visión
  /*if (cargando) {
    return (
      <div className="contenedorCargando">
          <h2 className='cargando'>Cargando...</h2>
      </div> 
    )
  }*/

  return (
    //si es de día, el background tiene la clase diurno y si es de noche, nocturno (para el CSS)
    <div className={`background ${esDeDia ? "diurno" : "nocturno"}`}>
      <header className="App-header">
        <div className='contenedorPrincipal'>
          <div className='appClima'>
            <div className='arriba'>
              {/* el componente del que se obtiene el lugar */}
              <Lugar lugarSeleccionado={lugarSeleccionado} setLugarSeleccionado={setLugarSeleccionado} esDeDia={esDeDia}/>
            </div>
            <div className='izquierdaYDerecha'>
              <div className='izquierda'>
              {/*De esta forma solo sale el cargando del lado de api clima mientras se está buscando el nuevo lugar*/}
              {cargando && (
                  <p className="cargando">Cargando...</p>
                )}
                {/*componente del termómetro*/}
              {!cargando && <Termometro temperatura={apiData.current_weather.temperature} cargando={cargando} esDeDia={esDeDia}/>}
              {/* componente del día de la semana y el horario (que retoma el día de Córdoba o de la ubicación del usuario, no me queda claro)*/}
              {!cargando && <DiaYHorario cargando={cargando} esDeDia={esDeDia} tiempoLugar={tiempoLugar}/>}
              {/* componente de la temperatura máxima y mínima*/}
              {!cargando && <Temperaturas temperaturaMaxima={apiData.daily.temperature_2m_max} temperaturaMinima={apiData.daily.temperature_2m_min}
                unidadMedidaTemperaturaMaxima={apiData.daily_units.temperature_2m_max} unidadMedidaTemperaturaMinima={apiData.daily_units.temperature_2m_min}
                cargando={cargando} esDeDia={esDeDia}
              />}
              </div>

              <div className='derecha'>
                {!cargando && 
                <div className='aspectosDestacados'> 
                  <h3 className={`tituloAspectosDestacados ${esDeDia ? "destacadoDiurno" : "destacadoNocturno"}`}> Aspectos destacados </h3>
                  {/* componente de los aspectos destacados (como amanecer y anochecer, humedad, visibilidad, etc)*/}
                  <CuadroBloques apiData={apiData} sunrise={apiData.daily.sunrise} sunset={apiData.daily.sunset}
                    precipitation={apiData.hourly.precipitation_probability} relativehumidity_2m={apiData.hourly.relativehumidity_2m}
                    visibility={apiData.hourly.visibility} windspeed={apiData.current_weather.windspeed}
                    uv_index_max={apiData.hourly.uv_index} cargando={cargando} esDeDia={esDeDia}
                    />
                </div>
                }
              </div>
            </div>

            <div className='abajo'>
              {!cargando &&
              <div className='temperaturaDiaria'> 
                <h3 className={`hoy ${esDeDia ? "hoyDiurno" : "hoyNocturno"}`}> Hoy </h3>
                {/* componente del gráfico de temperatura diaria */}
                 <CuadroTemperatura apiData={apiData} time={apiData.hourly.time} temperature_2m={apiData.hourly.temperature_2m} cargando={cargando} esDeDia={esDeDia}/>
              </div>
              }
            </div> 
          </div>
        
          <div className='appTransporte'>
          {/* app de api de transporte de BsAs*/}
            <Transporte linea={linea}/>
          </div>
        </div>  
      </header>
    </div>
  );
}
export default App;