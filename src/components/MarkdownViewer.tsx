"use client";
import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Image from "next/image";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <Markdown
      className="prose max-w-none"
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
            <SyntaxHighlighter {...props} style={vscDarkPlus} language={match[1]} PreTag="div">
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {content}
    </Markdown>
  );
}
