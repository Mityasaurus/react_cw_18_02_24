import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import ExchangeRate from "./pages/ExchangeRate";
import Customers from "./pages/Customers";
import { AppProvider } from "./utils/context";
import BanksIncExp from "./pages/BanksIncExp";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="banks-inc-exp" element={<BanksIncExp />} />
            <Route path="exchange-rate" element={<ExchangeRate />} />
            <Route path="customers" element={<Customers />} />
          </Route>
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
