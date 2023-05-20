import { Layout } from "../Layout";
import { Video } from "@/types";
import { VideoList } from "../VideoList";
import styles from "./AllVideos.module.css";
import Link from "next/link";

interface IAllVideosProps {
  data: Video[];
  categories: string[];
  selected?: string;
}

export const AllVideos = ({ data, categories, selected }: IAllVideosProps) => {
  return (
    <Layout title="All Videos Page" header>
      <div className={styles.root}>
        <h4>
          All Videos <small>(click any category to filter videos)</small>
        </h4>
        {selected && (
          <h6>
            Showing <i>{selected}</i> videos
          </h6>
        )}
        <CategoriesList categories={categories} />
        <VideoList data={data} wrap />
      </div>
    </Layout>
  );
};

const CategoriesList = ({ categories }: { categories: string[] }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category}
          className={styles.category}
          href={`/allvideos/${category}`}
        >
          {category}
        </Link>
      ))}
    </div>
  );
};
