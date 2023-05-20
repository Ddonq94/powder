import { AllVideos } from "@/components/AllVideos";
import { getCategories, getData, getDataByCategory } from "@/helpers";
import { Video } from "@/types";
import {
  GetStaticPaths,
  GetStaticPathsContext,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";

interface IAllPageProps {
  data: Video[];
  categories: string[];
  selected?: string;
}

export default function AllPage({ data, categories, selected }: IAllPageProps) {
  return <AllVideos data={data} categories={categories} selected={selected} />;
}

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const data = await getDataByCategory(context?.params?.slug as string);

  const categories = await getCategories();

  return {
    props: { data, categories, selected: context?.params?.slug },
  };
};

export const getStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const data = await getCategories();
  const paths = data.map((category) => ({
    params: { slug: category },
  }));
  return {
    paths,
    fallback: false,
  };
};
