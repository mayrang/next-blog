import { Post } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ICON_CLASS = "text-4xl text-yellow-300 group-hover:text-6xl tranlation-all m-4";

export default function AdjacentPost({ type, post }: { type: "next" | "prev"; post: Post }) {
  const { title, path, description } = post;

  return (
    <Link href={`/posts/${path}`} className="relative group max-h-60 bg-black w-full">
      <Image src={`/images/posts/${path}.png`} alt={title} width={250} height={100} className="w-full opacity-50" />
      <div className="absolute flex items-center justify-around w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center text-white">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="font-semibold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
