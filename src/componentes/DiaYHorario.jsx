import "../App.css";

function DiaYHorario(props) {
    //Obtengo fecha de api.json
    const fecha = new Date(props.time);
    //Defino los nombres de los días de la semana
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    //Obtengo el número del día de la semana (0 = Domingo, 1 = Lunes, etc.)
    const numeroDiaSemana = fecha.getDay();    
    //Obtengo el nombre del día de la semana
    const nombreDiaSemana = diasSemana[numeroDiaSemana];
    //Obtengo la hora y minutos
    const hora = fecha.getHours();
    const minutos = fecha.getMinutes();

    return (
        <div className='díaYHorario'>
            <div className='sticker'> Sticker </div>
            <div className='díaYHorario'> {nombreDiaSemana}, {hora}:{minutos < 10 ? '0' : ''}{minutos}</div>
        </div>
    );
}

export default DiaYHorario;