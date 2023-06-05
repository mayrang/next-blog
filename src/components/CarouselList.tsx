import { getLikePosts } from "@/api/posts";
import React from "react";

import CardItem from "./CardItem";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselList() {
  const posts = await getLikePosts();
  return (
    <section className="px-2 my-4">
      <h3 className="font-semibold text-2xl my-2">You May Like</h3>
      <MultiCarousel>
        {posts.map((post) => (
          <CardItem post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
