import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  var data = {
    labels: [1, 2, 3, 4, 5, 6, 7],
    datasets: [
      {
        label: `Coins Available`,
        data: [1, 2, 3, 4, 5, 6, 1, 1, 2, 3, 4, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
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
      <Doughnut data={data} className="doughnut" options={options} />
    </div>
  );
};

export default DoughnutChart;
