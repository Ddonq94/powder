import { promises as fs } from "fs";
import path from "path";
import { Video } from "./types";

export async function getData() {
  const jsonDirectory = path.join(process.cwd(), "json");
  const fileContents = await fs.readFile(jsonDirectory + "/data.json", "utf8");
  const objectData = JSON.parse(fileContents);

  return objectData;
}

export async function getCategories() {
  const data: Video[] = await getData();

  const categories = Array.from(new Set(data.map(({ category }) => category)));

  return categories.sort();
}

export async function getDataByCategory(cat: string) {
  const allData: Video[] = await getData();

  return allData.filter(({ category }) => category === cat);
}
