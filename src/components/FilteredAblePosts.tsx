"use client";
import { Post } from "@/api/posts";
import React, { useState } from "react";
import Category from "./Category";
import PostsGrid from "./PostsGrid";

type Props = {
  posts: Post[];
  categoryList: string[];
};

const ALL_POSTS = "All Posts";

export default function FilteredAblePosts({ posts, categoryList }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filteredPosts = selected === ALL_POSTS ? posts : posts.filter((post) => post.category === selected);

  return (
    <section className="flex gap-3 m-4">
      <PostsGrid posts={filteredPosts} />
      <Category onClick={setSelected} selected={selected} categoryList={[ALL_POSTS, ...categoryList]} />
    </section>
  );
}
