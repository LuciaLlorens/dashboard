import "../App.css";
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

const options = {
    fill: true,
    scales: {
    x:{

    },
      y: {
        min: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  

function CuadroTemperatura(props) {
    const lista = props.datosCuadro.time;
    const horas = lista.map((i) => i.slice(11,16));
    const temperaturas = props.datosCuadro.temperature_2m;
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

    return (
        <div className='cuadroTemperatura'>
            <Bar data={data} options={options} />
        </div>
    );
}

export default CuadroTemperatura;