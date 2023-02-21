import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>Math Magicians</h1>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <NavLink
            to="home"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Home
          </NavLink>
        </li>
        <li>|</li>
        <li className={styles.li}>
          <NavLink
            to="calculator"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Calculator
          </NavLink>
        </li>
        <li>|</li>
        <li className={styles.li}>
          <NavLink
            to="quote"
            className={({ isActive }) => {
              const active = isActive ? styles.active : styles.navLink;
              return active;
            }}
          >
            Quote
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
