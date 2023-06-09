import { getRelationPosts } from "@/api/posts";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
export default async function RelationPosts({ path }: { path: string }) {
  const relationPosts = await getRelationPosts(path);
  if (typeof relationPosts === "string") {
    notFound();
  }
  console.log("relation", relationPosts);
  const { prev, next } = relationPosts;
  return (
    <div className="w-full relati h-60 flex">
      {prev && (
        <Link href={`/posts/${prev.path}`} className={`${next ? "w-1/2" : "w-full"}  relative`}>
          <Image
            src={`/images/posts/${prev.path}.png`}
            width={500}
            height={350}
            alt={prev.title}
            className="w-full h-full"
          />
          <div className="absolute px-20 top-1/2 left-1/2 cursor-pointer group text-white -translate-x-1/2 -translate-y-1/2 flex items-center w-full justify-between">
            <FaArrowLeft className="text-yellow-500 text-4xl m-4 font-extrabold group-hover:text-6xl transition-all" />
            <div>
              <h3 className="font-bold text-xl">{prev.title}</h3>
              <p className="font-semibold text-md">{prev.description}</p>
            </div>
          </div>
        </Link>
      )}
      {next && (
        <Link href={`/posts/${next.path}`} className={`${prev ? "w-1/2" : "w-full"} relative`}>
          <Image
            src={`/images/posts/${next.path}.png`}
            width={500}
            height={350}
            alt={next.title}
            className="w-full h-full"
          />
          <div className="absolute px-20 top-1/2 left-1/2 cursor-pointer group text-white -translate-x-1/2 -translate-y-1/2 flex items-center w-full justify-between">
            <div>
              <h3 className="font-bold text-xl">{next.title}</h3>
              <p className="font-semibold text-md">{next.description}</p>
            </div>

            <FaArrowRight className="text-yellow-500 text-4xl m-4 font-extrabold group-hover:text-6xl transition-all" />
          </div>
        </Link>
      )}
    </div>
  );
}
