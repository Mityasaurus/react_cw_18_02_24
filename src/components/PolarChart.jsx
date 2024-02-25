import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "../style/charts.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PolarChart() {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "My first doughnut",
        data: [12, 48, 78, 101, 56],
        backgroundColor: [
          "#ff0062",
          "#8c00ff",
          "#00ddff",
          "#00ff37",
          "#f6ff00",
        ],
        borderWidth: 0,
        hoverOffset: 25,
      },
    ],
  };
  const options = {};
  return (
    <div className={`${s.chart} ${s.polarChart}`}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}
