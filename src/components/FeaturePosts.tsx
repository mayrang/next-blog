import { getFeaturePosts } from "@/api/posts";
import React from "react";
import CardItem from "./CardItem";
import CardList from "./CardList";

export default async function FeaturePosts() {
  const posts = await getFeaturePosts();
  return (
    <section className="my-20">
      <h3 className="font-semibold text-xl">FeaturePosts</h3>
      <CardList cardList={posts} />
    </section>
  );
}
