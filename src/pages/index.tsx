import { Home } from "@/components/Home";
import { getData } from "../helpers";
import { Video } from "../types";

interface IHomePageProps {
  recentsData: Video[];
  highlightsData: Video[];
}

export default function HomePage({
  recentsData,
  highlightsData,
}: IHomePageProps) {
  return (
    <Home
      recents={recentsData}
      highlights={highlightsData}
      seeAllHref={"/allvideos"}
    />
  );
}

export async function getStaticProps() {
  const data: Video[] = await getData();

  // assuming recency is by createdAt
  const recentsData = data
    .sort((a, b) => b.createdAt - a.createdAt)
    .slice(0, 5);

  // no flag to say if highlights or now so I am just taking first 5
  const highlightsData = data.slice(0, 5);

  return {
    props: { recentsData, highlightsData },
  };
}
