"use client";
import { DetailPost } from "@/api/posts";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import dayjs from "dayjs";
import { AiTwotoneCalendar } from "react-icons/ai";
type Props = {
  post: DetailPost;
};

export default function DetailPost({ post }: Props) {
  return (
    <section className="my-10 rounded-2xl bg-gray-100">
      <Image
        src={`/images/posts/${post.path}.png`}
        alt={post.title}
        width={500}
        height={350}
        className="w-full h-[350px] rounded-t-2xl"
      />
      <div className="p-5">
        <time className=" flex items-center text-blue-500 justify-end gap-1">
          <AiTwotoneCalendar />
          {dayjs(post.date).format("YYYY-MM-DD")}
        </time>
        <h3 className="font-bold text-3xl">{post.title}</h3>
        <p className="font-semibold text-xl">{post.description}</p>
        <div className="h-1 w-36 bg-blue-500 mt-4 mb-8"></div>
        <Markdown
          className="prose max-w-none"
          children={post.content}
          remarkPlugins={[remarkGfm]}
          components={{
            img: (image) => (
              <Image
                width={500}
                height={350}
                src={image.src || ""}
                alt={image.alt || ""}
                className="object-cover w-full max-h-60"
              />
            ),
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </section>
  );
}
