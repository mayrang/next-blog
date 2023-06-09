import { DetailPost } from "@/api/posts";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "./MarkdownViewer";
type Props = {
  post: DetailPost;
};

export default function DetailPost({ post }: Props) {
  const { title, path, description, content, date } = post;
  return (
    <section className="m-4 rounded-2xl bg-gray-100 overflow-hidden">
      <Image src={`/images/posts/${path}.png`} alt={title} width={500} height={350} className="w-full h-[350px] " />
      <div className="p-5">
        <time className=" flex items-center text-blue-500 self-end gap-1">
          <AiTwotoneCalendar />
          {dayjs(date).format("YYYY-MM-DD")}
        </time>
        <h3 className="font-bold text-3xl">{title}</h3>
        <p className="font-semibold text-xl">{description}</p>
        <div className="h-1 w-36 bg-blue-500 mt-4 mb-8"></div>
        <MarkdownViewer content={content} />
      </div>
    </section>
  );
}
