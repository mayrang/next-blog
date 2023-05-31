import Image from "next/image";
import React from "react";
import Avatar from "../../public/images/avatar.jpg";
import Link from "next/link";
export default function Profile() {
  return (
    <section className="mx-auto text-center">
      <div className="w-[250px] h-[250px] mx-auto">
        <Image alt="avatar" src={Avatar} width={250} className="w-full h-full rounded-full " priority />
      </div>
      <h2 className="font-bold text-2xl mt-2">{"Hi! I'm May"}</h2>
      <h3 className="font-semibold text-xl">Frontend Developer</h3>
      <p className="mt-1">항상 피곤한 사람</p>
      <Link href="/contact">
        <button className="py-1 px-4 mt-2 rounded bg-yellow-500 "> Contact Me</button>
      </Link>
    </section>
  );
}
