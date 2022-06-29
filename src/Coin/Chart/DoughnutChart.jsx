import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const DoughnutChart = () => {
  var data = {
    labels: ["bitcoin","Ethereum","doge coin","USDC"],
    datasets: [
      {
        label: `Coins Available`,
        data: [1, 2, 3, 4],
        backgroundColor: ["#14C38E", "#30AADD", "#C67ACE", "#F37121"],
        borderWidth: 1,
      },
    ],
  };

  var options = {
    maintainAspectRatio: false,
    responsive: true,
    display: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };
  return (
    <div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
