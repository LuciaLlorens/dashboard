# Aplicación de Clima y Transporte

El proyecto consiste en crear una aplicación React que contenga, por un lado, datos del clima y, por el otro, datos del transporte de la ciudad de Buenos Aires (su ubicación en el mapa). 

## Comenzando 🚀

Este proyecto es realizado en el marco del curso "Front-End de Sitio Web Usando Api" dictado por FAMAF-UNC, en el plan Argentina Programa 4.0.
Para la app de clima, en la primera instancia (tp1) no usé una API, sino que un componente estático json llamado api.json, donde ingresé los datos necesarios para que posteriormente devuelva la aplicación web de clima. En una seguna instancia (tp2) hice la app de clima que se puede observar actualmente: teniendo acceso a una API aportada por les docentes, de donde saco los datos para mi aplicación React.
En el caso de la app de transporte, directamente hice esto segundo. Tengo acceso a una API de transporte de la ciudad de Buenos Aires que fue aportada por les docentes para la realización del trabajo práctico 3. La aplicación React que hice retoma los datos de la API y le da la posiblidad al usuario de elegir sobre cuál linea de colectivo quiere averiguar su ubicación. Una vez ingresasa la línea en el menú desplegable, salen las ubicaciones de los colectivo de esa línea en el mapa, apretando cualquiera de los puntos aparece un cartel popup que tiene información del colectivo en cuestión (línea, recorrido, empresa y velocidad). Estos datos se actualizan cada 31 segundos.
La última instancia (tp4) ha consistido en mejorar la aplicación. En mi caso establecí un select para que el usuario pueda seleccionar sobre qué ciudad ver el clima, así como establecí un "modo nocturno" si en la ciudad que selecciona es de noche.

### Pre-requisitos 📋

Para poder ejecutar la aplicaciónn solamente se necesita una aplicación que permita abrir páginas web, como Google Chrome, Firefox, Opera, Internet Explorer, etc. 

## Ejecutando las pruebas ⚙️

En las primeras dos instancias en las cuales trabajé en torno a la creación de la app de clima, los problemas que surgieron en su construcción principalmente fueron en relación a los gráficos, los cuales terminé haciendo con svg y con la librería chartjs y ReatChart2, algo que pude hacer a partir de la visualización de varios tutoriales en youtube.
Fue compleja la realización del termómetro en relación a los grados de ángulo y los °C extraídos del archivo api.json; pero esto no fue tan complejo de solucionar, debido a que tenía más relación a problemas en torno al uso de props, que una breve explicación y pasado en limpio arreglaron. 
Así también tuve problemas en relación a la desvirtuación de la línea de color cuando se superara los 20°, esto último se pudo solucionar mosificando el path de 0 a 1 en esos casos (este auxiliarPath luego se pasaba al path de svg):
let auxiliarPath = 0;
      if (temperatura>20) {
            auxiliarPath = 1;
      }
Para la segunda instancia del proyecto tuve algunos problemas para poder conectar la API a la página web, pero no implicaron muchísimo problema, simplemente eran cuestiones de cómo pasar las props de un lado a otro (algo que ya me había sucedido, por ejemplo, al querer hacer la app react de piedra, papel o tijera del anterior curso). Otra retomada sobre el uso de props aclaró el tema (mi principal problema tiene que ver con la organización de los proyectos, ya que las props pasan de padres a hijos y no entre "hermanos", lo que en algunas funciones me implica repensar la ubicación de funciones o estados, por ejemplo).
Otro asunto tuvo que ver con la necesidad de, a partir de una corrección de la docente, remodificar el diseño de la app general, debido a que la parte de clima ocupaba toda la página web (no había dejado el espacio en el cual posteriormente iría mi app de transporte).
Ambos procedimientos de esta segunda instancia me llevaron bastantes horas, pero no fueron por la complejidad necesariamente, sino por el tiempo disponible y los problemas de organización en la revisión de cada componente; la mayoría de las cosas las fui corrigiendo a medida que me iban saltando los errores en la página web o el diseño fuera tomando forma poco a poco.
La tercera instancia fue la de creación del otro lado de la página, la app de transporte. Creo que de todos los proyectos que hemos realizado en este curso éste último me ha sido el más sencillo. Esto se debe a que no tuve que invertir demasiado tiempo en la cuestión del diseño de la página web, solo necesitaba poner el mapa en el espacio que ya anteriormente había destinado para ello en la segunda instancia. Así también, al haberlo hecho en un solo componente no tuve el problema que anteriormente ya tenía con el paso de las props de un componente a otro.
Tal es así que los problemas que he tenido con este proyecto para su realización en tiempo y forma han sido ajenos al mismo (cuestiones de tiempos personales entre trabajo, universidad y el curso). Así también, me sucedió que en un principio los valores de las lineas de colectivo las había puesto en las option del select ya en el return, no me quedó claro si esto era lo que hacía que la página se demorara en cargar o qué; pero los problemas de funcionalidad se solucionaron cuando pasé las lineas de colectivo como objeto en lineasColectivo, con sus respectivos valores (tal como los profes habían propuesto en el google docs del tp3). Pero posteriormente la página me saltaba error debido a que al querer mapearlo en las opciones (para no tener que poner uno por uno, sino que directamente se hicieran la cantidad de opciones correspondientes) ya que no eran un array. Consulté con chatgpt y me dijo que había una forma de solucionar el problema, podía o bien utilizar Object.entries() para convertir el objeto lineasColectivo en una matriz de pares [nombre, código] que luego pudiera mapear, o, como finalmente lo dejé, Object.keys() para obtener un arreglo de las claves del objeto.
Aun sigo impresionada de que la página funcione. Aquí también tengo que reconocer que mi acceso a la API, como empecé con el proyecto posteriormente a mis compañeros, fue más sencillo. Sé que en un primer lugar conseguir acceder a la API para todes fue algo complejo.
En la cuarta instancia he tenido diversos problemas. El principal, al cual no pude resolver y por lo que opté hacer mi proyecto de otra forma, fue que no podía hacer un select para elegir ciudades que se autocompletara con los datos de la api dinámica. Lo probé de diversas maneras y no me salió, no lograba utilizar el select para autocompletar, básicamente. A veces no me permitía escribir, otras no me aparecían las opciones, otras no me permitía seleccionar ninguna de ellas; en otras oportunidades lo que me costaba era que los datos de la api se hicieran una lista y luego poder retomar la latitud y longitud de los mismos para obtener los datos del clima. Es así que decidí hacerse un json con los datos de algunas ciudades que yo dispuse, poniendo su latitud y longitud. Quedará pendiente para otra oportunidad aprender hacerlo de forma dinámica.
Un segundo problema que tuve y que tampoco he podido resolver (pero me he dado cuenta de que no depende de mi aplicación, sino que de la api), es que solamente me sale la hora y el día de la semana del lugar en el que me encuentro (Córdoba). Cuando pongo, por ejemplo, Pekín, me sigue saliendo la misma hora y día de la semana de Córdoba; aunque por suerte el modo nocturno y diurno funcionan correctamente (esto es debido a que no es según la hora, sino de is_day). Esto es debido a que por alguna razón, en la api está presente el horario de mi ubicación y no el horario de la ciudad que el usuario busca.
Un último punto fue la imposibilidad de hacer que la parte de transporte se modificara según si era de día o de noche, esto era porque no llegaba a recibir esa información de apiClima.
Me gustaría poder mejorar en un futuro:
* el poder conseguir que se haga una selección con autocompletado a partir de la api dinámica.
* que el horario y el día de la semana sea del lugar que se hace la búsqueda.
* más íconos e imagenes que sean dinámicas.
* que app de transporte tenga modo nocturno.
* que cuando une selecciona un colectivo que está fuera del rango de visión en el mapa, automáticamente el mapa se corra hacia donde esa línea está.
* hacer el diseño para otros tamaños de pantalla (tablet, celulares).

## Construido con 🛠️

* React
* Visual Studio Code
* API con la cual hice el json de coordenadas: https://open-meteo.com/en/docs/geocoding-api
* API de clima: https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1
* API de transporte: https://datosabiertos-transporte-apis.buenosaires.gob.ar/colectivos/vehiclePositionsSimple?client_id=cb6b18c84b3b484d98018a791577af52&client_secret=3e3DB105Fbf642Bf88d5eeB8783EE1E6
* leaflet
* svg (con tutoriales en youtube)
* chartjs y ReactChart2 (con tutoriales en youtube)
* dashboard: https://slidemodel.com/wp-content/uploads/21868-01-vintage-weather-dashboard-powerpoint-template-16x9-1.jpg
* Reconozco así también la utilización de medios alternativos para solucionar problemas o dudas que surgieran, como ChatGPT, prinicpalmente para poder manejar svg y chartjs, las cuestiones de los gráficos; así como también para solucionar cuestiones en torno a la app de transporte (como la recarga cada 31 segundos con setInterval)
* paleta de colores realizada por mí, teniendo como inspiración el dashboard dado por les docentes
* imagenes extraídas de Google, en el caso el background nocturno yo modifiqué la imagen de diurno
* íconos de clima meteocons: https://bas.dev/work/meteocons

## Versionado 📌

Esta es la tercera versión del proyecto de clima y primera versión del proyecto de transporte.

## Autores ✒️

* **Lucía Alén Llorens** - [LuciaLlorens](https://github.com/LuciaLlorens)

## Licencia 📄

Este proyecto no se encuentra bajo licencia.

## Expresiones de Gratitud 🎁

* Quiero agradecer a les profesores de Argentina Programa 4.0 por, además de sus claras explicaciones, poner a diposición de les alumnes las grabaciones de las clases y demás recursos, los cuales me posibilitaron llevar adelante el proyecto encomendado.
* Agradezco también a mi compañero que me brindó su opinión sobre cualquier problema que pude tener y me colaboró a tener más tiempo para dedicar al trabajo. Así como también a avanzar con las cuestiones de los gráficos (svg y chart)
* Agradezco también al creador del template, sin cuya estructura habría estado muy perdida para llevar adelante el archivo README: [Villanuevand](https://github.com/Villanuevand). 
