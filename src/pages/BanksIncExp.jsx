import React from "react";
import { useApp } from "../utils/context";
import BarChart from "../components/BarChart";
import PolarChart from "../components/PolarChart";
import Calendar from "../components/Calendar";
import LineChart from "../components/LineChart";
import groupByCategoryYear from "../utils/groupByCategoryYear";

export default function BanksIncExp() {
  const { incExp } = useApp();
  const yearsBarChart = [];
  incExp?.forEach((item) => {
    let year = parseInt(item.dt.slice(0, 4));
    if (yearsBarChart.includes(year) === false) {
      yearsBarChart.push(year);
    }
  });
  yearsBarChart.sort();
  const valuesBarChart = [];
  let counter = 0;
  for (const year of yearsBarChart) {
    incExp?.forEach((item) => {
      if (parseInt(item.dt.slice(0, 4)) === year) {
        counter += item.value;
      }
    });
    valuesBarChart.push(counter);
    counter = 0;
  }

  ////////////////////////////////////////////////////

  const categoriesPolarChart = [];
  incExp?.forEach((item) => {
    let category = item.txt;
    if (categoriesPolarChart.includes(category) === false) {
      categoriesPolarChart.push(category);
    }
  });
  const valuesPolarChart = [];
  counter = 0;

  for (const category of categoriesPolarChart) {
    incExp?.forEach((item) => {
      if (item.txt === category) {
        counter += item.value;
      }
    });
    valuesPolarChart.push(counter);
    counter = 0;
  }

  ////////////////////////////////////////////////////

  return (
    <div>
      <Calendar />
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <BarChart labels={yearsBarChart} data={valuesBarChart} />
        <PolarChart labels={categoriesPolarChart} data={valuesPolarChart} />
      </div>
      <LineChart propsData={groupByCategoryYear(incExp)} />
    </div>
  );
}
