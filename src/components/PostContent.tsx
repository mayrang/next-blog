import { DetailPost } from "@/api/posts";
import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "./MarkdownViewer";
import RelationPosts from "./AdjacentPost";
type Props = {
  post: DetailPost;
};

export default function PostContent({ post }: Props) {
  const { title, description, content, date } = post;
  return (
    <div className="p-5  flex flex-col">
      <div className=" flex items-center text-blue-500 self-end ">
        <AiTwotoneCalendar />
        <p className="font-semibold ">{dayjs(date).format("YYYY-MM-DD")}</p>
      </div>
      <h3 className="font-bold text-3xl">{title}</h3>
      <p className="font-semibold text-xl">{description}</p>
      <div className="h-1 w-36 bg-blue-500 mt-4 mb-8"></div>
      <MarkdownViewer content={content} />
    </div>
  );
}
