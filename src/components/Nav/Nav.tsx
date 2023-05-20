import styles from "./Nav.module.css";
import { Logo } from "../Logo";

export const Nav = () => {
  return (
    <div className={styles.root}>
      <Logo />
    </div>
  );
};
