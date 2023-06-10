"use client";
import React, { useEffect, useState } from "react";
import Banner, { BannerData } from "./Banner";

type FormData = {
  email: string;
  subject: string;
  message: string;
};

export default function EmailForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.email.trim() === "") {
      setBanner({
        type: "error",
        message: "이메일은 비워놓을 수 없습니다.",
      });
      return;
    } else if (formData.subject.trim() === "") {
      setBanner({
        type: "error",
        message: "제목은 비워놓을 수 없습니다.",
      });
      return;
    } else if (formData.message.trim() === "") {
      setBanner({
        type: "error",
        message: "메시지는 비워놓을 수 없습니다.",
      });
      return;
    }
    console.log(formData);
    const result = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    console.log("result", result);
    if (result.ok) {
      setBanner({
        type: "success",
        message: "성공했음",
      });
      setFormData({ email: "", subject: "", message: "" });
    } else {
      const error = await result.json();
      console.log(error);
      setBanner({
        type: "error",
        message: error.error,
      });
    }

    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };
  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form onSubmit={handleSubmit} className="rounded-xl w-full my-4 p-4 bg-slate-700 gap-2 flex flex-col">
        <label htmlFor="email" className="font-semibold text-xl text-white">
          Your Email
        </label>
        <input
          type="email"
          required
          autoFocus
          id="email"
          name="email"
          value={formData.email}
          onChange={changeForm}
          className="w-full border-none outline-none"
        />
        <label htmlFor="subject" className="font-semibold text-xl text-white">
          Subject
        </label>
        <input
          type="text"
          required
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={changeForm}
          className="w-full border-none outline-none"
        />
        <label htmlFor="message" className="font-semibold text-xl text-white">
          Message
        </label>
        <textarea
          id="message"
          required
          name="message"
          value={formData.message}
          onChange={changeForm}
          className="w-full border-none outline-none"
          rows={10}
        />
        <button
          type="submit"
          className="w-full bg-yellow-300 font-bold text-center text-slate-700 border-none outline-none"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
