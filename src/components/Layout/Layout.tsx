import Head from "next/head";
import styles from "./Layout.module.css";
import { Header } from "../Header";
import { Nav } from "../Nav";
import { Inter } from "next/font/google";

export interface ILayoutProps {
  children: React.ReactNode;
  title?: string;
  header?: boolean;
}

const inter = Inter({ subsets: ["latin"] });

export const Layout = ({
  children,
  title = "Splash screen",
  header = true,
}: ILayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Nav />
        <div className={styles.body}>{header && <Header />}</div>
        {header && <div className={styles.partition} />}
        <div className={styles.body}>{children}</div>
      </main>
    </>
  );
};