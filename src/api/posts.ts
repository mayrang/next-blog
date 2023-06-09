import { readFile } from "fs/promises";
import path from "path";

export interface Post {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}
export interface DetailPost extends Post {
  content: string;
}

export interface RelationPosts {
  prev?: Post;
  next?: Post;
}
export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getLikePosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => !post.featured);
}

export async function getFeaturePosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter((post) => post.featured);
}

export async function getDetailPost(id: string): Promise<DetailPost | string> {
  const metadata = await getAllPosts().then((posts) => posts.find((post) => id === post.path));

  if (!metadata) return "해당 페이지를 찾을 수 없습니다.";
  const detailFilePath = path.join(process.cwd(), "data", "posts", `${id}.md`);
  const content = await readFile(detailFilePath, "utf-8");

  return {
    ...metadata,
    content,
  };
}

export async function getRelationPosts(id: string): Promise<string | RelationPosts> {
  const metaData = await getAllPosts();
  const metaIndex = metaData.findIndex((post) => id === post.path);
  let relationPosts = {};
  if (metaIndex === -1) return "해당 페이지를 찾을 수 없습니다.";
  console.log(metaIndex, metaData.length);
  if (metaIndex !== 0) {
    console.log("prev");
    relationPosts = { ...relationPosts, next: metaData[metaIndex - 1] };
  }
  if (metaIndex !== metaData.length - 1) {
    console.log("next");
    relationPosts = { ...relationPosts, prev: metaData[metaIndex + 1] };
  }
  return relationPosts;
}
