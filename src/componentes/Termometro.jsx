import "../App.css";

function Termometro(props) {
      const temperatura = props.temperatura; // Temperatura sacada de api.json
      const minTemperatura = -20; // Temperatura mínima en el rango
      const maxTemperatura = 40; // Temperatura máxima en el rango
      const minAngulo = -90; // Ángulo correspondiente a la temperatura mínima
      const maxAngulo = 180; // Ángulo correspondiente a la temperatura máxima

      const angulo = (temperatura - minTemperatura) * ((maxAngulo - minAngulo) / (maxTemperatura - minTemperatura)) + minAngulo;

      // Cálculo de las coordenadas finales del path
      const xFinal = 200 + 150 * Math.cos((angulo - 135) * (Math.PI / 180));
      const yFinal = 200 + 150 * Math.sin((angulo - 135) * (Math.PI / 180));

      // por problemas del ángulo de color cuando se superaba 20 hice esto para luego poder modificar el
      // de la línea de color en el path
      let auxiliarPath = 0;
      if (temperatura>20) {
            auxiliarPath = 1;
      }
      return (
            <>
            <svg className="termometro" width="400" height="400" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="100" fill="transparent" stroke="grey" stroke-width="5"/>
                  <circle cx="200" cy="200" r="150" fill="transparent" stroke="grey" stroke-width="20"/>
                  <path d={`M 93.934 306.066 A 150 150 0 ${auxiliarPath} 1 ${xFinal} ${yFinal}`} fill="none" stroke="rgb(0, 136, 255)" stroke-width="20" stroke-linecap="round"/>

                  !--Aquí es está el círculo en el que se muestra la temperatura actual. Así también los datos rescatados de api.json por medio de props desde el padre--
                  <circle cx="200" cy="350" r="90" fill="rgb(245, 182, 35)" />
                  <text x="200"  y="350" text-anchor="middle" dominant-baseline="middle" fontSize="60" fill="white">{props.temperatura}°C</text>
                  
                 <g>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(0 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(-90 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(180 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(-45 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(-135 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(45 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="white"
                              stroke-width="5"
                              transform="rotate(135 200 200)"/>
                  </g>
                  <g transform={`rotate(${angulo} 200 200)`}>
                  <line x1="170" y1="200"
                        x2="320" y2="200"
                        stroke="red"
                        stroke-width="7"
                        strokeLinecap="round"
                        transform="rotate(-135 200 200)"/>
                  </g>
                  <circle cx="200" cy="200" r="15" fill="rgb(245, 182, 35)"/>
                  <g>
                        <text fill="white" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(135 200 200) rotate(-135 325 200)">-20</text>
                        <text fill="white" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(180 200 200) rotate(180 325 200)">-10</text>
                        <text fill="white" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(-135 200 200) rotate(135 325 200)">0</text>
                        <text fill="white" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(-90 200 200) rotate(90 325 200)">10</text>
                        <text fill="black" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(-45 200 200) rotate(45 325 200)">20</text>
                        <text fill="black" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(0 200 200) rotate(0 325 200)">30</text>
                        <text fill="black" x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(45 200 200) rotate(-45 325 200)">40</text>
                  </g>
            </svg>
            </>
    );
}

export default Termometro;