import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import s from "../style/charts.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const data = {
    labels: [1, 2, 3, 4, 5],
    datasets: [
      {
        label: "balance",
        data: [23, 45, 12, 26, 78],
        backgroundColor: "#F2EFFF",
        hoverBackgroundColor: "#5932EA",
        borderRadius: "12",
      },
      //   {
      //     label: "sales",
      //     data: [23, 45, 12, 26, 78],
      //     backgroundColor: "#F2EFFF",
      //     hoverBackgroundColor: "#5932EA",
      //     borderRadius: "12",
      //   },
      //   {
      //     label: "range",
      //     data: [23, 45, 12, 26, 78],
      //     backgroundColor: "#F2EFFF",
      //     hoverBackgroundColor: "#5932EA",
      //     borderRadius: "12",
      //   },
    ],
  };
  const options = {
    responsive: true,
    scales: {
      x: { beginAtZero: true, grid: { display: false } },
      y: { beginAtZero: true, grid: { display: false }, display: false },
    },
  };
  return (
    <div className={`${s.barChart} ${s.chart}`}>
      <Bar data={data} options={options}></Bar>
    </div>
  );
}
