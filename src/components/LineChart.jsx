import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import getRandomColor from "../utils/randomColor";
import s from "../style/charts.module.css";
ChartJS.register(LineElement, PointElement, Tooltip, Legend);

export default function LineChart(props) {
  const { propsData } = props;
  const data = {
    //! labels: Object.keys(propsData && propsData[Object.keys(props)[0]]),
    labels: [1, 2, 3, 4, 5],
    datasets: Object.keys(propsData).map((item) => {
      if (propsData[item]) {
        return {
          label: item,
          data: Object.values(propsData[item]),
          borderColor: getRandomColor(),
          backgroundColor: getRandomColor(),
        };
      }
      return null;
    }),
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
    },
  };
  return (
    <div className={`${s.chart} ${s.lineChart}`}>
      <Line data={data} options={options}></Line>
    </div>
  );
}
