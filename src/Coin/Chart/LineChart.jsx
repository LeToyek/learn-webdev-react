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

const LineChart = ({ chartData, day,isDown }) => {
  const historicalData = chartData.prices;
  var data = {
    labels: historicalData.map((c) => {
      let date = new Date(c[0]);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${12 - date.getHours()}:${date.getMinutes()} AM`;
      return day === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Harga dalam ${day} hari terakhir`,
        data: historicalData.map((c) => c[1]),
        borderColor: isDown?"#F32424":"#9EB23B",
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

export default LineChart;
