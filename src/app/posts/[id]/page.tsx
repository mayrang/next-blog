import { getDetailPost } from "@/api/posts";
import { notFound } from "next/navigation";
import React from "react";
import PostContent from "@/components/PostContent";
import Image from "next/image";
import AdjacentPost from "@/components/AdjacentPost";

export async function generateMetadata({ params: { id } }: Props) {
  const post = await getDetailPost(id);
  if (typeof post !== "string") {
    return {
      title: post.title,
      description: post.description,
    };
  }
}

type Props = {
  params: {
    id: string;
  };
};
export default async function PostDetailPage({ params: { id } }: Props) {
  const post = await getDetailPost(id);
  if (typeof post === "string") {
    notFound();
  }
  const { path, title, prev, next } = post;
  return (
    <section className="m-4 rounded-2xl bg-gray-100 overflow-hidden">
      <Image src={`/images/posts/${path}.png`} alt={title} width={500} height={350} className="w-full h-[350px] " />
      <PostContent post={post} />
      <section className="shadow-md flex">
        {prev && <AdjacentPost type="prev" post={prev} />}
        {next && <AdjacentPost type="next" post={next} />}
      </section>
    </section>
  );
}
