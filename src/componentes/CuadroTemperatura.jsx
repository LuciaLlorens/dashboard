import "../App.css";
// importo lo necesario para el gráfico
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  TimeScale,
);

// algunas configuraciones del gráfico.
const options = {
    fill: true,
    scales: {
    x:{
      ticks: {
        color: 'black', // Color de las etiquetas del eje X
      },
    },
      y: {
        min: 0,
        ticks: {
          color: 'black', // Color de las etiquetas del eje Y
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  
// defino las variables que llevan el eje x y el eje y
function CuadroTemperatura({time, temperature_2m , cargando}) {
  const lista = time;
  const horas = lista.map((i) => i.slice(11,16));
  const temperaturas = temperature_2m;
  const data = {
    labels: horas,

    datasets: [
      {
        label: "Temperatura",
        data: temperaturas,
        borderColor: "rgb(245, 182, 35)",
        backgroundColor: "rgb(245, 182, 35)",
        fill: true,
      },
    ],
  };

  if (cargando) {
    return <h2>Cargando</h2>;
  } else {
    return (
        <div className='cuadroTemperatura'>
            <Bar data={data} options={options} />
        </div>
    );
  }
}

export default CuadroTemperatura;
//A este componente lo hice mirando un videito de youtube, sinceramente no entendí todo cada parte de lo que aquí se presenta.