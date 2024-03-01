import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import s from "../style/navigation.module.css";

export default function Navigation() {
  return (
    <div className={s.nav_container}>
      <Header />
      <nav>
        <NavLink to="banks-inc-exp" className={s.nav_btn}>
          Banks income and expenses
        </NavLink>
        <NavLink to="exchange-rate" className={s.nav_btn}>
          Exchange rate
        </NavLink>
        <NavLink to="customers" className={s.nav_btn}>
          Customers
        </NavLink>
      </nav>
      <Footer />
    </div>
  );
}
