import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
        <Link to="/">
          <img src={logo} alt="SOS Tech" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contato">Contato</Link>
          </li>
          <li className={styles.item}>
            <Link to="/sobrenos">Sobre nós</Link>
          </li>
        </ul>
    </nav>
  );
}