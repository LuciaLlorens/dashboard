import './App.css';
import api from './api.json';
import Termometro from './componentes/Termometro';
import DiaYHorario from './componentes/DiaYHorario';
import Temperaturas from './componentes/Temperaturas';
import CuadroBloques from './componentes/CuadroBloques';
import CuadroTemperatura from './componentes/CuadroTemperatura';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='appClima'>
          <div className='izquierda'>
            <p className='lugar'>{api.timezone}</p>
            <Termometro temperatura={api.current_weather.temperature} />
            <DiaYHorario time={api.current_weather.time}/>
            <Temperaturas temperaturaMaxima={api.daily.temperature_2m_max} temperaturaMinima={api.daily.temperature_2m_min}
              unidadMedidaTemperaturaMaxima={api.daily_units.temperature_2m_max} unidadMedidaTemperaturaMinima={api.daily_units.temperature_2m_min}
            />
          </div>

          <div className='derecha'>
            <div className='temperaturaDiaria'> 
              <h3> Hoy </h3>
              <CuadroTemperatura datosCuadro={api.hourly}/>
            </div>
            <div className='aspectosDestacados'> 
              <h3> Aspectos destacados </h3>
              <CuadroBloques/>
            </div>
          </div> 
        </div>
        
        <div className='appTransporte'>
        </div>
      </header>
    </div>
  );
}

export default App;