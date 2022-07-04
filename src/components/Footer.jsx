import { FaFacebook, FaMicrosoft, FaLinkedin, FaLink } from "react-icons/fa";
import {SiDell, SiTesla} from "react-icons/si";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a
          className={styles.link}
          href="https://www.tesla.com/"
          target="_blank"
        >
          <i className="site">
            <SiTesla className={styles.pagina} />
          </i>
        </a>
        <a
          className={styles.link}
          href="https://www.microsoft.com/pt-br"
          target="_blank"
        >
          <i className={styles.instagram}>
            <FaMicrosoft className={styles.instagram} />
          </i>
        </a>
        <a
          className={styles.link}
          href="https://www.dell.com/pt-br"
          target="_blank"
        >
          <i className={styles.linkedin}>
            <SiDell className={styles.linkedin} />
          </i>
        </a>
        <p>Nossos parceiros</p>
      </footer>
    </>
  );
}