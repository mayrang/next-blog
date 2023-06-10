import EmailForm from "@/components/EmailForm";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
export default function ContactPage() {
  return (
    <section className=" flex flex-col m-4 items-center">
      <h2 className="font-bold text-3xl my-2">Contact Me</h2>
      <p className="text-lg">pkss0626@naver.com</p>
      <div className="flex justify-center my-2 gap-5 items-center text-5xl">
        <AiFillGithub />
        <AiFillInstagram />
        <AiFillYoutube />
      </div>
      <h2 className="font-bold text-3xl my-6">Or Send me an email</h2>
      <EmailForm />
    </section>
  );
}
