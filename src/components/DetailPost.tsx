"use client";
import { DetailPost } from "@/api/posts";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";
import dayjs from "dayjs";
type Props = {
  post: DetailPost;
};

export default function DetailPost({ post }: Props) {
  return (
    <section className="my-10 rounded-2xl bg-gray-100">
      <div className="w-full h-[450px] rounded-t-2xl">
        <Image
          src={`/images/posts/${post.path}.png`}
          alt={post.title}
          width={300}
          height={300}
          className="w-full h-full rounded-t-2xl"
        />
      </div>
      <time className="self-end block">{dayjs(post.date).format("YYYY-MM-DD")}</time>
      <h3 className="font-semibold text-2xl">{post.title}</h3>
      <Markdown
        children={post.content}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                {...props}
                children={String(children).replace(/\n$/, "")}
                style={dark}
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
    </section>
  );
}
