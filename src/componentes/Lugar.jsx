import "../App.css";
import coordenadasCiudad from "./coordenadasCiudad.json"

function Lugar({ setLugarSeleccionado, lugarSeleccionado, esDeDia }) {
  // Actualiza el estado con la opción seleccionada
  const seleccionLugar = (e) => {
    setLugarSeleccionado(e.target.value); 
    console.log(e.target.value);
  };

  return (
    <div className="arriba">
        <select onChange={seleccionLugar}>
            <option value="">Selecciona otro lugar</option>
            {Object.keys(coordenadasCiudad).map((lugar) => (
            <option key={lugar} value={lugar}>
                {lugar}, {coordenadasCiudad[lugar].país}
            </option>
        ))}
        {/*el nombre de las lineas se muestran en el menú desplegable y los códigos se ponen como valores*/}
        </select>
        {lugarSeleccionado && (
        <h3 className={`lugarYPais ${esDeDia ? "lugarDiurno" : "lugarNocturno"}`}>{lugarSeleccionado}, {coordenadasCiudad[lugarSeleccionado].país}</h3>
        )}
    </div>
  );
}

export default Lugar;