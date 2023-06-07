"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  categoryList: string[];
};
export default function Category({ categoryList }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const nowCategory = searchParams.get("category") || "";
  const handleButton = (category: string) => {
    if (category === "all") {
      router.push("/posts");
    } else {
      router.push(`/posts?category=${category}`);
    }
  };
  return (
    <div className="hidden md:block mt-10 pr-8">
      <h4 className="font-bold font-lg leading-5  border-b-gray-300 border-b-4">Category</h4>
      <div className="flex flex-col items-center">
        <button disabled={nowCategory === ""} onClick={() => handleButton("all")}>
          All Posts
        </button>
        {categoryList.map((category) => (
          <button disabled={nowCategory === category} key={category} onClick={() => handleButton(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
