import "../App.css";
import ParcialmenteNubladoYNeblinoso from '../img/ParcialmenteNubladoYNeblinoso.svg';

function DiaYHorario({cargando, esDeDia, tiempoLugar}) {
    //Obtengo fecha de api.json
    const fecha = new Date(tiempoLugar);
    //Defino los nombres de los días de la semana
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    //Obtengo el número del día de la semana (0 = Domingo, 1 = Lunes, etc.)
    const numeroDiaSemana = fecha.getDay();    
    //Obtengo el nombre del día de la semana
    const nombreDiaSemana = diasSemana[numeroDiaSemana];
    //Obtengo la hora y minutos
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    if (cargando) {
        return (
              <h2>Cargando</h2>
        )
  } else {
    return (
        <div className="díaYHorario">
            <img className='sticker' src={ParcialmenteNubladoYNeblinoso} alt="parcialmente nublado y neblinoso"></img>
            <div className={`díaYHorarioTexto ${esDeDia ? "horarioDiurno" : "horarioNocturno"}`}> {nombreDiaSemana}, {hora}:{minutos < 10 ? '0' : ''}{minutos}</div>
        </div>
    );
  } 
}

export default DiaYHorario;