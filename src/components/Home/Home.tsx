import styles from "./Home.module.css";
import { Layout } from "../Layout";
import { Video } from "@/types";
import { VideoList } from "../VideoList";
import { Splash } from "../Splash";
import { useEffect, useState } from "react";

interface IHomeProps {
  recents: Video[];
  highlights: Video[];
  seeAllHref: string;
}

export const Home = ({ recents, highlights, seeAllHref }: IHomeProps) => {
  const [landing, setLanding] = useState<boolean>(true);

  // show splash screen for 3 seconds then load home page
  useEffect(() => {
    const timer = setTimeout(() => setLanding(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return landing ? (
    <Splash />
  ) : (
    <Layout title="Home Page" header>
      <div className={styles.root}>
        <VideoList title={"Recents"} data={recents} seeAllHref={seeAllHref} />
        <VideoList
          title={"Highlights"}
          data={highlights}
          seeAllHref={seeAllHref}
        />
      </div>
    </Layout>
  );
};
