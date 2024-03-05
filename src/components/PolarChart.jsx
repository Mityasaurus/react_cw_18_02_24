import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "../style/charts.module.css";
import getRandomColor from "../utils/randomColor";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PolarChart(props) {
  const { propsData } = props;
  const colors = [];
  for (let i = 0; i < Object.keys(propsData).length; i++) {
    colors.push(getRandomColor());
  }
  const data = {
    labels: Object.keys(propsData),
    datasets: [
      {
        label: "Загальна сума",
        data: Object.values(propsData),
        backgroundColor: colors,
        borderWidth: 0,
        hoverOffset: 25,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div className={`${s.chart} ${s.polarChart}`}>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
}
