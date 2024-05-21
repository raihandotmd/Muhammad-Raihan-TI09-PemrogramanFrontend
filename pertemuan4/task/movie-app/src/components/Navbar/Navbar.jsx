import { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [navToggle, setNavToggle] = useState(true);
  function handleClick() {
    setNavToggle(!navToggle);
  }
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__main}>
          <h2 className={styles.navbar__brand}>Movie App</h2>
          <div className={styles.navbar__toggle}>
            <button onClick={handleClick}>X</button>
          </div>
        </div>
        <ul
          className={`${styles.navbar__list} ${navToggle ? styles.navbar__list_show : ""}`}
        >
          <li className={styles.navbar__item}>Home</li>
          <li className={styles.navbar__item}>About</li>
          <li className={styles.navbar__item}>Profile</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
