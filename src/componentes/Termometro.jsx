import "../App.css";

function Termometro(props) {

      return (
            <>
            <svg className="termometro" width="400" height="400" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="100" fill="transparent" stroke="grey" stroke-width="10"/>
                  <circle cx="200" cy="200" r="150" fill="transparent" stroke="grey" stroke-width="20"/>
                  <path d="M 93.934 306.066 A 150 150 0 1 1 306.066 306.066" fill="none" stroke="purple" stroke-width="20" stroke-linecap="round"/>

                  <circle cx="200" cy="350" r="70" fill="yellow" />
                  <text x="200"  y="350" text-anchor="middle" dominant-baseline="middle" fontSize="60" fill="black">{props.temperatura}</text>
                  
                  <line x1="170" y1="200"
                        x2="320" y2="200"
                        stroke="red"
                        stroke-width="5"
                        transform="rotate(-33 200 200)"/>
                 <circle cx="200" cy="200" r="15" fill="grey"/>
                 <g>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(0 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(-90 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(180 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(-45 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(-135 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(45 200 200)"/>
                        <line x1="290" y1="200"
                              x2="310" y2="200"
                              stroke="grey"
                              stroke-width="5"
                              transform="rotate(135 200 200)"/>
                  </g>
                  <g>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(135 200 200) rotate(-135 325 200)">-20</text>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(180 200 200) rotate(180 325 200)">-10</text>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(-135 200 200) rotate(135 325 200)">0</text>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(-90 200 200) rotate(90 325 200)">10</text>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(-45 200 200) rotate(45 325 200)">20</text>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(0 200 200) rotate(0 325 200)">30</text>
                        <text x="325"  y="200" text-anchor="middle" dominant-baseline="middle" transform="rotate(45 200 200) rotate(-45 325 200)">40</text>
                  </g>
            </svg>
            </>
    );
}

export default Termometro;