import { Space, DatePicker } from "antd";
import React, { useEffect } from "react";
import { useApp } from "../utils/context";
import formatDateString from "../utils/formatDateString";

const { RangePicker } = DatePicker;

export default function Calendar() {
  const {
    get_banks_inc_exp_data,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useApp();

  const fetch_data = async (start, end) => {
    try {
      if (!start) {
        start = `${new Date().getFullYear()}0101`;
      }
      if (!end) {
        end = `${new Date().getFullYear() - 5}0101`;
      }
      await get_banks_inc_exp_data(start, end);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  function handleGetDate(e) {
    if (e != null) {
      const start = formatDateString(e[0]);
      const end = formatDateString(e[1]);
      setStartDate(start);
      setEndDate(end);
      fetch_data(start, end);
    } else {
      fetch_data();
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
