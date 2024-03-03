import { Space, DatePicker } from "antd";
import React, { useEffect } from "react";
import { useApp } from "../utils/context";
import formatDateString from "../utils/formatDateString";

const { RangePicker } = DatePicker;

export default function Calendar() {
  const { setStartDate, setEndDate } = useApp();

  function handleGetDate(e) {
    if (e != null) {
      const start = formatDateString(e[0]);
      const end = formatDateString(e[1]);
      setStartDate(start);
      setEndDate(end);
    }
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
