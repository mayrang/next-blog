import { getDetailPost } from "@/api/posts";
import { notFound } from "next/navigation";
import React from "react";
import DetailPost from "@/components/DetailPost";

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
  return <DetailPost post={post} />;
}
