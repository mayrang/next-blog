"use client";
import { Post } from "@/api/posts";
import React from "react";
import CardItem from "./CardItem";
import { useSearchParams } from "next/navigation";

type Props = {
  posts: Post[];
};
export default function PostList({ posts }: Props) {
  const searchParams = useSearchParams();
  const nowCategory = searchParams.get("category");
  const filteredList = nowCategory ? posts.filter((post) => post.category === nowCategory) : posts;
  return (
    <section className="my-4">
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
        {filteredList.map((post) => (
          <li key={post.path}>
            <CardItem post={post} />
          </li>
        ))}
      </ul>
    </section>
  );
}
