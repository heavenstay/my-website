import ThemeButton from "../ThemeButton/ThemeButton";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <h1>even.</h1>

      <ThemeButton/>
    </div>
  );
}

