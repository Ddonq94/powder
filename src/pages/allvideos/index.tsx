import { AllVideos } from "@/components/AllVideos";
import { getCategories, getData } from "@/helpers";
import { Video } from "@/types";

interface IAllPageProps {
  data: Video[];
  categories: string[];
}

export default function AllPage({ data, categories }: IAllPageProps) {
  return <AllVideos data={data} categories={categories} />;
}

export async function getStaticProps() {
  const allData: Video[] = await getData();
  const categories = await getCategories();

  // loading first 60 so we dnt struggle with performance
  const data = allData.slice(0, 60);

  return {
    props: { data, categories },
  };
}
