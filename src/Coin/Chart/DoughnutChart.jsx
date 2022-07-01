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
        backgroundColor: ["#00AF91", "#007965", "#F58634", "#FFCC29","#3797A4","#8BCDCD","#CEE397","#FCF876"],
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
