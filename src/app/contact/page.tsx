import EmailForm from "@/components/EmailForm";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

export const metadata = {
  title: "Contact",
  description: "연락 페이지 입니다.",
};

const iconList = [
  { icon: <AiFillGithub />, url: "https://github.com/mayrang" },
  { icon: <AiFillInstagram />, url: "https://www.instagram.com/g.s.parkk/" },
  { icon: <AiFillYoutube />, url: "https://www.youtube.com/channel/UCNk7qTbtqtNo0K83_0U3BCg" },
];

export default function ContactPage() {
  return (
    <section className=" flex flex-col m-4 items-center">
      <h2 className="font-bold text-3xl my-2">Contact Me</h2>
      <p className="text-lg">pkss0626@naver.com</p>
      <ul className="flex justify-center my-2 gap-5 items-center text-5xl">
        {iconList.map((item, index) => (
          <a key={index} href={item.url} rel="noreferrer" target="_blank">
            {item.icon}
          </a>
        ))}
      </ul>
      <h2 className="font-bold text-3xl my-6">Or Send me an email</h2>
      <EmailForm />
    </section>
  );
}
