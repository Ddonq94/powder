import styles from "./Splash.module.css";
import { Layout } from "../Layout";
import { Logo } from "../Logo";

export const Splash = () => {
  return (
    <Layout header={false}>
      <div className={styles.root}>
        <Logo />
      </div>
    </Layout>
  );
};
