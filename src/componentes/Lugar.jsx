import "../App.css";
import coordenadasCiudad from "./coordenadasCiudad.json"

function Lugar({ setLugarSeleccionado, lugarSeleccionado }) {
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
        <p className="lugarYPais">{lugarSeleccionado}, {coordenadasCiudad[lugarSeleccionado].país}</p>
        )}
    </div>
  );
}

export default Lugar;