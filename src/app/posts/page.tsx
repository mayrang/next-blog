import { getAllPosts } from "@/api/posts";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return <div>posts</div>;
}
