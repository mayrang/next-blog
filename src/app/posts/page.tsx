import { getAllPosts } from "@/api/posts";
import FilteredAblePosts from "@/components/FilteredAblePosts";
import React from "react";

export const metadata = {
  title: "Posts",
  description: "글 목록 페이지 입니다.",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categoryList: string[] = [...new Set(posts.map((post) => post.category))];
  return <FilteredAblePosts posts={posts} categoryList={categoryList} />;
}
