import React, { useEffect } from "react";
import { useApp } from "../utils/context";

export default function ExchangeRate() {
  const { rate, get_rate_data } = useApp();

  const fetchData = async () => {
    try {
      await get_rate_data(
        "start=20230101&end=20240217&valcode=usd&sort=exchangedate&order=desc&json"
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Exchange rate</div>;
}
