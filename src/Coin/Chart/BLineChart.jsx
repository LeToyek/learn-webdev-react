import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const BLineChart = () => {
  var data = {
    labels: [1,2,3,4,5,6],
    datasets: [
      {
        label: `Harga dalam hari terakhir`,
        data: [1,2,3,4,4,5,6,5],
        borderColor: "#F32424",
        tension: 0.05,
        fill: false,
      },
    ],
  };
  var options = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },

    legend: {
      display: false,
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <div>
      <Line data={data} height={400} options={options}/>
    </div>
  );
};

export default BLineChart;