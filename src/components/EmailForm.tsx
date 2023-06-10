"use client";
import React, { useEffect, useState } from "react";

export default function EmailForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    console.log(1);
    if (banner.show) {
      setTimeout(() => {
        setBanner({ show: false, type: "", message: "" });
      }, 3000);
    }
  }, [banner]);
  const changeForm = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.email.trim() === "") {
      setBanner({
        show: true,
        type: "warning",
        message: "이메일은 비워놓을 수 없습니다.",
      });
      return;
    } else if (formData.subject.trim() === "") {
      setBanner({
        show: true,
        type: "warning",
        message: "제목은 비워놓을 수 없습니다.",
      });
      return;
    } else if (formData.message.trim() === "") {
      setBanner({
        show: true,
        type: "warning",
        message: "메시지는 비워놓을 수 없습니다.",
      });
      return;
    }
    console.log(formData);
    setBanner({
      show: true,
      type: "success",
      message: "성공했음",
    });
  };
  return (
    <section className="w-full max-w-md">
      {banner.show && (
        <div
          className={`rounded w-full text-center p-4 font-semibold ${
            banner.type === "success" ? "bg-green-300" : "bg-red-300"
          }`}
        >
          {banner.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="rounded-xl w-full my-4 p-4 bg-slate-700 gap-2 flex flex-col">
        <label htmlFor="email" className="font-semibold text-xl text-white">
          Your Email
        </label>
        <input
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
