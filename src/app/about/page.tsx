import Introduce from "@/components/Introduce";
import Profile from "@/components/Profile";
import React from "react";

export const metadata = {
  title: "About",
  description: "소개 페이지 입니다.",
};

export default function AboutPage() {
  return (
    <section>
      <Profile />
      <Introduce />
    </section>
  );
}
