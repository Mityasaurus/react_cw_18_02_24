import React from "react";
import s from "../style/header.module.css";
import logoImg from "../assets/img/logo.png";

export default function Header() {
  return (
    <header className={s.header}>
      <img src={logoImg} alt="Logo" />
      <h1>Dashboard</h1>
    </header>
  );
}
