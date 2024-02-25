import { Space, DatePicker } from "antd";
import React from "react";
import { useApp } from "../utils/context";

const { RangePicker } = DatePicker;

export default function Calendar() {
  const { setStartDate, setEndDate } = useApp();
  function handleGetDate(e) {
    console.dir(e);
    setStartDate(
      e[0].$M.length !== 2 || e[0].$D.length !== 2
        ? `${e[0].$y}0${e[0].$M + 1}0${e[0].$D}`
        : `${e[0].$y}${e[0].$M + 1}${e[0].$D}`
    );
    setEndDate(
      e[1].$M.length !== 2 || e[1].$D.length !== 2
        ? `${e[1].$y}0${e[1].$M + 1}0${e[1].$D}`
        : `${e[1].$y}${e[1].$M + 1}${e[1].$D}`
    );
  }
  return (
    <div>
      <Space direction="vertical" size={12} style={{ marginBottom: "25px" }}>
        <RangePicker
          onFocus={(_, info) => {}}
          onBlur={(_, info) => {}}
          onChange={handleGetDate}
        />
      </Space>
    </div>
  );
}
