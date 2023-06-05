import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  post: Post;
};
export default function CardItem({ post: { title, description, path, date, category } }: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="shadow-md hover:shadow-lg  rounded-md overflow-hidden">
        <div className="w-full h-[200px]">
          <Image src={`/images/posts/${path}.png`} alt={path} className="w-full h-full" width={200} height={200} />
        </div>
        <div className="flex flex-col items-center p-4 ">
          <time className=" self-end text-sm">{date.toString()}</time>

          <h4 className="font-bold text-lg">{title}</h4>
          <p className="w-full truncate text-center">{description}</p>
          <span className="bg-green-200 text-sm rounded-lg my-2 px-2">{category}</span>
        </div>
      </article>
    </Link>
  );
}
