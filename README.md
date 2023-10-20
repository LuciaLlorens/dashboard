# Aplicación de Clima

El proyecto consiste en crear una aplicación React que contenga datos del clima. 

## Comenzando 🚀

Este proyecto es realizado en el marco del trabajo práctico número 2 del curso "Front-End de Sitio Web Usando Api" dictado por FAMAF-UNC, en el plan Argentina Programa 4.0.
En la primera instancia no usé una API, sino que tengo un componente estático json llamado api.json, donde ingreso los datos necesarios para que posteriormente devuelva la aplicación web de clima.
En esta segunda instancia sí tengo acceso a una API aportada por les docentes, de donde saco los datos para mi aplicación React.

### Pre-requisitos 📋

Para poder ejecutar la aplicaciónn solamente se necesita una aplicación que permita abrir páginas web, como Google Chrome, Firefox, Opera, Internet Explorer, etc. 

## Ejecutando las pruebas ⚙️

Este segmento informativo está en construcción. Todavía no he tenido el tiempo de dar lugar a escribir los problemas que he tenido con este proyecto.
Principalmente han sido en relación a los gráficos, los cuales hice con svg y con la librería chartjs y ReatChart2.
Fue compleja la realización del termómetro en relazión a los grados de ángulo y los °C extraídos del archivo api.json. Así como también en relación a la desvirtuación de la línea de color cuando se superara los 20°.
Para la segunda versión del proyecto tuve algunos problemas para poder conectar la API a la página web, pero no implicaron muchísimo problema, simplemente eran cuestiones de cómo pasar las props de un lado a otro; lo mismo sucedió con remodificar el diseño para que la App de clima ocupara solo la mitad de la pantalla. Ambos procedimientos me llevaron bastantes horas, pero no fueron por la complejidad necesariamente, sino por el tiempo disponible y los problemas de organización en la revisión de cada componente; la mayoría de las cosas las fui corrigiendo a medida que me iban saltando los errores en la página web.

## Construido con 🛠️

* React.
* Visual Studio Code.
* API de clima: https://api.open-meteo.com/v1/forecast?latitude=-34.9215&longitude=-57.9545&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,weathercode,visibility,windspeed_10m,uv_index,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&current_weather=true&timezone=America%2FSao_Paulo&forecast_days=1
* svg (con tutoriales en youtube)
* chartjs y ReactChart2 (con tutoriales en youtube).
* dashboard: https://slidemodel.com/wp-content/uploads/21868-01-vintage-weather-dashboard-powerpoint-template-16x9-1.jpg
* Reconozco así también la utilización de medios alternativos para solucionar problemas o dudas que surgieran, como ChatGPT, prinicpalmente para poder manejar svg y chartjs, las cuestiones de los gráficos.
* paleta de colores realizada por mí, teniendo como inspiración el dashboard dado por les docentes.
* imagenes extraídas de Google.
* íconos de meteocons: https://bas.dev/work/meteocons

## Versionado 📌

Esta es la segunda versión del proyecto en React. Quedan mejorar algunas cuestiones de estilo (por ejemplo agregar mas stickers) y también podrían mejorarse algunas cuestiones en torno a la API, para hacer a una mayor dinámica de la página.

## Autores ✒️

* **Lucía Alén Llorens** - [LuciaLlorens](https://github.com/LuciaLlorens)

## Licencia 📄

Este proyecto no se encuentra bajo licencia.

## Expresiones de Gratitud 🎁

* Quiero agradecer a les profesores de Argentina Programa 4.0 por, además de sus claras explicaciones, poner a diposición de les alumnes las grabaciones de las clases y demás recursos, los cuales me posibilitaron llevar adelante el proyecto encomendado.
* Agradezco también a mi compañero que me brindó su opinión sobre cualquier problema que pude tener y me colaboró a tener más tiempo para dedicar al trabajo. Así como también a avanzar con las cuestiones de los gráficos (svg y chart)
* Agradezco también al creador del template, sin cuya estructura habría estado muy perdida para llevar adelante el archivo README: [Villanuevand](https://github.com/Villanuevand). 
