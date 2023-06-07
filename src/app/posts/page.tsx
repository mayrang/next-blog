import { Post, getAllPosts } from "@/api/posts";
import Category from "@/components/Category";
import PostList from "@/components/PostList";
import React from "react";

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categoryList: string[] = posts.reduce((acc: string[], cur: Post) => {
    if (acc.find((it) => it === cur.category)) {
      return acc;
    } else {
      return [...acc, cur.category];
    }
  }, []);
  return (
    <main className="flex gap-3">
      <PostList posts={posts} />
      <Category categoryList={categoryList} />
    </main>
  );
}
