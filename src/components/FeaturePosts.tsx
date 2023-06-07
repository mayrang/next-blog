import { getFeaturePosts } from "@/api/posts";
import React from "react";

import PostsGrid from "./PostsGrid";

export default async function FeaturePosts() {
  const posts = await getFeaturePosts();
  return (
    <section className="px-2 my-4">
      <h3 className="font-semibold text-2xl my-2">FeaturePosts</h3>
      <PostsGrid posts={posts} />
    </section>
  );
}
