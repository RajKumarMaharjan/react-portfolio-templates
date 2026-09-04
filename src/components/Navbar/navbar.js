"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "../../contexts/theme";
import { projects, skills, contact } from "../../portfolio";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  return (
    <nav className={`${styles.nav} ${themeName === "dark" ? styles.dark : ""}`}>
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className={styles.navList}
      >
        {projects.length ? (
          <li className={styles.navListItem}>
            <a
              href="#projects"
              onClick={toggleNavList}
              className={styles.link}
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className={styles.navListItem}>
            <a
              href="#skills"
              onClick={toggleNavList}
              className={styles.link}
            >
              Skills
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className={styles.navListItem}>
            <a
              href="#contact"
              onClick={toggleNavList}
              className={styles.link}
            >
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button
        type="button"
        onClick={toggleTheme}
        className={styles.button}
        aria-label="toggle theme"
      >
        {themeName === "dark" ? "☀" : "☾"}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className={styles.button}
        aria-label="toggle navigation"
      >
        {showNavList ? "×" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;
