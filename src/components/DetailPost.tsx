import { DetailPost } from "@/api/posts";
import React from "react";

type Props = {
  post: DetailPost;
};

export default function DetailPost({ post }: Props) {
  return (
    <section className="my-10">
      <h3 className="font-semibold text-2xl">{post.title}</h3>
      <pre className="word-break w-full">{post.content}</pre>
    </section>
  );
}
