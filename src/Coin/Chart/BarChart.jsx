import React from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = ({ chartData }) => {
  const historicalData = chartData.prices;
  var data = {
    labels: historicalData.map((c) => {
      let date = new Date(c[0]);
      // let time =
      //   date.getHours() > 12
      //     ? `${date.getHours() - 12}:${date.getMinutes()} PM`
      //     : `${date.getHours() - 12}:${date.getMinutes()} AM`;
      return date.toLocaleDateString();
    }),
    datasets: [
      {
        label: "# of Votes",
        data: historicalData.map((c) => c[1]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <div>
      <Bar data={data} height={400} options={options} />
    </div>
  );
};

export default BarChart;
