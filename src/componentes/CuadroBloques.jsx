import "../App.css";

function CuadroBloques() {
    

    return (
        <div className='cuadroBloques'>
              <div className='primeraFila'>
                <div className='bloques'>
                  <p> índice UV </p>
                  <p> 6 </p>
                </div>
                <div className='bloques'> 
                  <p> Estado del viento </p>
                  <p> 11.12km/h </p>
                </div>
                <div className='bloques'> 
                  <p> Salida y puesta del sol </p>
                  <p> 6:35 </p>
                  <p> 19:30 </p>
                </div>
              </div>
              <div className='segundaFila'>
                <div className='bloques'>
                  <p> Humedad </p>
                  <p> 12% </p>
                  <p> normal </p>
                </div>
                <div className='bloques'>
                  <p> Visibilidad </p>
                  <p> 6.1km </p>
                  <p> promedio </p>
                </div>
                <div className='bloques'>
                  <p> Calidad del aire </p>
                  <p> 105 </p>
                  <p> insalubre </p>
               </div>
              </div>
            </div>
    );
}

export default CuadroBloques;