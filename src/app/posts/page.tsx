import { getAllPosts } from "@/api/posts";
import FilteredAblePosts from "@/components/FilteredAblePosts";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categoryList: string[] = [...new Set(posts.map((post) => post.category))];
  return <FilteredAblePosts posts={posts} categoryList={categoryList} />;
}
