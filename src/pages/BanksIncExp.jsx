import React from "react";
import { useApp } from "../utils/context";
import BarChart from "../components/BarChart";
import PolarChart from "../components/PolarChart";
import Calendar from "../components/Calendar";
import LineChart from "../components/LineChart";
import groupByCategoryYear from "../utils/groupByCategoryYear";
import groupByYear from "../utils/groupByYear";
import groupByCategory from "../utils/groupByCategory";

export default function BanksIncExp() {
  const { incExp } = useApp();

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
        <BarChart propsData={groupByYear(incExp)} />
        <PolarChart propsData={groupByCategory(incExp)} />
      </div>
      <LineChart propsData={groupByCategoryYear(incExp)} />
    </div>
  );
}
