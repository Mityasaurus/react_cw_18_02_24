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
import { useApp } from "../utils/context";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart(props) {
  const incExp = props.data;
  const years = [];
  incExp?.map((item) => {
    let year = parseInt(item.dt.slice(0, 4));
    if (years.includes(year) === false) {
      years.push(year);
      year = year + 1;
    }
  });
  let tempYear = years[0];
  let indexYear = 0;
  const values = [];
  let counter = 0;
  incExp?.map((item) => {
    let year = parseInt(item.dt.slice(0, 4));
    if (year === tempYear) {
      counter += item.value;
    } else {
      indexYear = indexYear + 1;
      tempYear = years[indexYear];
      values.push(counter);
      counter = item.value;
    }
  });
  values[values.length] = counter;
  console.log(values);
  const data = {
    labels: years,
    datasets: [
      {
        label: "«Валовий зовнішній борг України",
        data: values,
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
