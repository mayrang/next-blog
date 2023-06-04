import { Post } from "@/api/posts";
import React from "react";
import CardItem from "./CardItem";

type Props = {
  cardList: Post[];
};
export default function CardList({ cardList }: Props) {
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4 ">
      {cardList.map((post) => (
        <li key={post.path}>
          <CardItem post={post} key={post.title} />
        </li>
      ))}
    </ul>
  );
}
