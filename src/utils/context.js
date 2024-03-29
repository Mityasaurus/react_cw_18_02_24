import { createContext, useContext, useEffect, useState } from "react";
import { fetch_config } from "../utils/fetch_config.js";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [rate, setRate] = useState([]);
  const [incExp, setIncExp] = useState([]);
  const [startDate, setStartDate] = useState("20180101");
  const [endDate, setEndDate] = useState("20231231");

  const get_rate_data = async (...obj) => {
    try {
      const response = await fetch(
        `${fetch_config.BASE_URL}${fetch_config.PATH_RATE}?${obj[0]}`
      );
      const data = await response.json();
      setRate(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const get_banks_inc_exp_data = async () => {
    try {
      const response = await fetch(
        `${fetch_config.BASE_URL}${fetch_config.PATH_BANKS_INC_EXP}&start=${startDate}&end=${endDate}`
      );
      const data = await response.json();
      setIncExp(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    get_banks_inc_exp_data();
  }, [startDate, endDate]);

  return (
    <AppContext.Provider
      value={{
        rate,
        incExp,
        startDate,
        endDate,
        get_rate_data,
        get_banks_inc_exp_data,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
