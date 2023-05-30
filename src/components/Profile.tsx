import Image from "next/image";
import React from "react";
import Link from "next/link";
export default function Profile() {
  return (
    <section className="mx-auto w-full flex flex-col items-center gap-y-3">
      <div className="w-[200px] h-[200px]">
        <Image alt="avatar" src={"/images/avatar.jpg"} width={200} height={0} className="w-full h-full rounded-full " />
      </div>
      <div className="leading-4 text-center">
        <div className="font-bold text-lg">{"Hi! I'm May"}</div>
        <div className="font-semibold text-md">Frontend Developer</div>
        <div className="text-sm">항상 피곤한 사람</div>
        <Link href="/contact" className="p-1 rounded bg-yellow-400 text-sm">
          Contact Me
        </Link>
      </div>
    </section>
  );
}
