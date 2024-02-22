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
        <p className={s.text_name}>Evano</p>
        <p className={s.text_desc}>Project manager</p>
      </article>
    </footer>
  );
}
