import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className=" flex items-center justify-between  p-4 w-full ">
      <Link href="/" className="font-bold text-2xl">
        May's Blog
      </Link>
      <div className="flex items-center gap-4 ">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </header>
  );
}
