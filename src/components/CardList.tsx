import { Post } from "@/api/posts";
import React from "react";
import CardItem from "./CardItem";

export default function CardList({ cardList }: { cardList: Post[] }) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 px-4">
      {cardList.map((post) => (
        <CardItem post={post} key={post.title} />
      ))}
    </ul>
  );
}
