import { Post } from "@/api/posts";
import Image from "next/image";
import React from "react";

export default function CardItem({ post }: { post: Post }) {
  return (
    <div className="shadow-xl w-auto">
      <div className="w-full h-[200px]">
        <Image
          src={`/images/posts/${post.path}.png`}
          alt={post.path}
          className="w-full h-full"
          width={200}
          height={200}
        />
      </div>
      <div className="p-3 pb-5">
        <time className="block text-end w-full text-sm">{new Date(post.date).toISOString().split("T")[0]}</time>
        <div className="text-center">
          <h4 className="font-semibold">{post.title}</h4>
          <p className="text-sm">{post.description}</p>
          <span className="bg-green-200 text-xs rounded mt-2 px-1">{post.category}</span>
        </div>
      </div>
    </div>
  );
}
