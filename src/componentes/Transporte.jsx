import "../App.css";
import {useState, useEffect, useCallback} from "react";
import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";

function Transporte() {
  //estado de la linea que va a seleccionar el usuario
  const [lineaSeleccionada, setLineaSeleccionada] = useState(null);
  //para almacenar los datos de la api
  const [lineasMapa, setLineasMapa] = useState(null);
  const [cargando, setCargando] = useState(false);
  // Esta es la Api de transporte, le dejo el espacio para que la linea seleccionada por el usuario sea buscada según el código
  const apiURLTrasnporte = `https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?route_id=${lineaSeleccionada}&client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6`;
  //estas son las traducciones del routeShortName a RouteId para hacer en filtro en el fetch, como nos indicaron en el google docs 
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

  //Aquí llamo a la api de transporte, al igual que hice con api de clima, solo que en este caso no en useEffect
  // uso useCallBack porque sino me saltaba todo el tiempo un warning por usar llamadaApi en los useEffects de más abajo,
  // esto es debido a que sino cambiaba en cada render
  const llamadaApi = useCallback(() => {
    setCargando(true);
    fetch(apiURLTrasnporte)
    .then((resp) => resp.json())
    .then((data) => {
      setLineasMapa(data);
      setCargando(false);
      console.log("Info de Transporte: ", data);
    })
    .catch((ex) => {
      console.error("error", ex);
      setCargando(false);
    });
  }, [apiURLTrasnporte]);

  // Actualiza el estado con la opción seleccionada
  const seleccionBondi = (e) => {
    setLineaSeleccionada(e.target.value); 
    console.log(e.target.value);
  };

  // UseEffect para cargar datos cuando cambia la línea seleccionada o al iniciar la página web
  useEffect(() => {
    //cuando lineaSeleccionada cambia se llama a llamadaApi, o al iniciar la app
    llamadaApi();
  }, [lineaSeleccionada, llamadaApi]);
  
  // UseEffect para actualizar datos cada 31 segundos
  useEffect(() => {
    //lo que hace setInterval es llamar a llamadaApi cada 31 segundos, se crea un intervalo
    const interval = setInterval(() => {
      llamadaApi();
    }, 31000);
    return () => {
      //cuando cambia lineaSeleccionada se limpia el intervalo, lo que permite que se reinicie el useEffect con la linea nueva, si es que hay
      clearInterval(interval)};
  }, [lineaSeleccionada, llamadaApi]);

  //retorno todo lo visual: el menú desplegable con las lineas de colectivo que convierto en array y el mapa

  //En un principio pensé agregarle un botón que dijera buscar, pero después me di cuenta de que si yo fuera usuario sería un embole
  // tener que poner buscar cada vez que quisiera buscar una línea de colectivo, así que descarté la idea y los colectivos se muestran
  // solo con seleccionarlo.

  return (
    <div>
      {/*este es el menú desplegable con las opciones de lineas de colectivo dispuestas anteriormente en lineasColectivo*/}
      <label className="labelSeleccion">Selecciona una línea de colectivo:</label>
      {/*cuando se seleccione alguna de las opciones de linea se modificará lineaSeleccionada*/}
      <select onChange={seleccionBondi}>
        <option value="">Lineas de colectivos para seleccionar</option>
        {/*convierto el objeto lineasColectivo en un array, y lo mapeo para no tener que escribir cada linea manualmente a continuación 
        (con map creo varios option, uno por cada línea)*/}
        {Object.keys(lineasColectivo).map((linea) => (
          <option key={lineasColectivo[linea]} value={lineasColectivo[linea]}>
            {linea}
          </option>
        ))}
        {/*el nombre de las lineas se muestran en el menú desplegable y los códigos se ponen como valores*/}
      </select>
      {/*este es el mapa cuyo código se encuentra en la página de leaflet, cambié el tamaño para que sea acorde a la página web*/}
      <MapContainer className="mapa" style={{height: '640px', width: '800px'}} center={[-34.6, -58.4]} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Mostrar un mensaje de "Cargando" o un spinner sobre el mapa mientras se están cargando los datos */}
        {cargando && (
          <div className="loading-overlay">
            <h2>Cargando</h2>
          </div>
        )}
        {/*Si lineasMapa tiene contenido como corresponde, marcarmos el colectivo en la posición y creamos el 
        popup que tiene los datos del colectivo*/}
        {!cargando && (lineasMapa && lineasMapa.length > 0 ? (lineasMapa.map((bondi) => (
          <Marker position={[bondi.latitude, bondi.longitude]}>
            <Popup className="popupBondi">
              <ul>
                <li>Linea: {bondi.route_short_name}</li>
                <li>Recorrido: {bondi.trip_headsign}</li>
                <li>Empresa: {bondi.agency_name}</li>
                <li>Velocidad: {Math.round(bondi.speed)} km/h</li>
              </ul>
            </Popup>
          </Marker>
        ))) : (
          <p>No podemos acceder a la información que se solicita</p>
        ))}
          {/*En el caso de que no se pueda acceder a lineasMapa se muestra este párrafo de aviso*/}
      </MapContainer>
    </div>
  );
}

export default Transporte;