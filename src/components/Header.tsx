import rocketLogo from "../assets/rocket.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="" />
      <div className={styles.titleContainer}>
        <span className={styles.toText}>to</span>
        <span className={styles.doText}>do</span>
      </div>
    </header>
  );
}
