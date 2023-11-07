import {useState, useEffect} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

function Transporte() {
  const [lineaSeleccionada, setLineaSeleccionada] = useState(null);
  const [lineasMapa, setLineasMapa] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [posicionMapa, setPosicionMapa] = useState([-34.6, -58.4]);
  const apiURLTrasnporte = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${lineaSeleccionada}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
 const lineasColectivo = {
    "7A Toma Nueva": 1,
    "7A Barrio Policial": 2,
    "7B a Retiro": 1609,
    "7B a Barrio Samore": 1608,
    "10A San Benito": 32,
    "12A a Palermo": 1746,
    "12A a Barracas": 1747,
    "26A a Barrio Rivadavia": 2031,
    "26 A a Retiro": 2032,
    "34B B-Cdad.Universitaria": 1629,
    "34B B- a San Miguel": 1628,
    "42A Oro Verde (Inta)": 8,
    "42A Paraná (Casa de Gobierno)": 7,
    "57D x Ruta 7 Palermo Lujan": 384,
    "130A a La Boca x Munro": 198,
    "130B a Est. Bolugne": 199,
    "133A A-Barracas": 1719,
    "133D D- Est. Transf. Vte López": 1724,
    "159C L (Roja) Correo Central": 839,
    "159A L (Azul) Correo Central": 1703,
    "140A A-Est. Bolougne (Linea Mitre)": 1710,
    "140A A-CCK": 1711,
    "184A a Chacarita": 1982,
    "184A 3-Est.Palomar x Emaús": 1981,
    "253A a Liniers": 1464,
    "253A a Libertad": 1465,
    "321A a Libertad": 1466,
    "321A a Est.Castelar": 1467,
  };

  const llamadaApi = () => {
    setCargando(true);
    fetch(apiURLTrasnporte)
    .then((resp) => resp.json())
    .then((data) => {
      setLineasMapa(data);
      setCargando(false);
      console.log("Info de Transporte: ", data);
    })
    .catch((ex) => {
      console.error(ex);
      setCargando(false);
    });
  }
  
    useEffect(() => {
      llamadaApi();
    }, [lineaSeleccionada]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        llamadaApi();
      }, 31000);
      return () => {
        clearInterval(interval);
      };
    }, [lineaSeleccionada]);

  return (
    <div>
      <label className="labelSeleccion">Selecciona una línea de colectivo:</label>
      <select onChange={(e) => {setLineaSeleccionada(e.target.value); console.log(e.target.value)}}>
        <option value="">Lineas de colectivos para seleccionar</option>
        {Object.keys(lineasColectivo).map((linea) => (
          <option key={lineasColectivo[linea]} value={lineasColectivo[linea]}>
            {linea}
          </option>
        ))}
      </select>

      <MapContainer className="mapa" style={{height: '640px', width: '800px'}} center={posicionMapa} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {lineasMapa?.map((marker) => (
          <Marker position={[marker.latitude, marker.longitude]}>
            <Popup className="popupBondi">
              <ul>
                <li>Linea: {marker.route_short_name}</li>
                <li>Recorrido: {marker.trip_headsign}</li>
                <li>Empresa: {marker.agency_name}</li>
                <li>Velocidad: {Math.round(marker.speed)} km/h</li>
              </ul>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Transporte;