import React from "react";
import s from "../style/footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <img
        src="https://www.computerhope.com/jargon/g/guest-user.png"
        alt="Profile"
      />
      <article>
        <p className={s.text_name}>Dmytro Bovdun</p>
        <p className={s.text_desc}>.NET Developer</p>
      </article>
    </footer>
  );
}
