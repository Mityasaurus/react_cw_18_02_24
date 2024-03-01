import React, { useEffect } from "react";
import { useApp } from "../utils/context";
import BarChart from "../components/BarChart";
import PolarChart from "../components/PolarChart";
import Calendar from "../components/Calendar";

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
        <BarChart data={incExp} />
        <PolarChart />
      </div>
    </div>
  );
}
