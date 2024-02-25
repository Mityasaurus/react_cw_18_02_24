import { createContext, useContext, useState } from "react";
import { fetch_config } from "../utils/fetch_config.js";

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [rate, setRate] = useState([]);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

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

  return (
    <AppContext.Provider
      value={{ rate, get_rate_data, setStartDate, setEndDate }}
    >
      {children}
    </AppContext.Provider>
  );
};
