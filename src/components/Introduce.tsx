import React from "react";

const TITLE_CLASS = "font-bold text-xl my-2";

export default function Introduce() {
  return (
    <article className="bg-gray-100 my-8 text-center w-full rounded-xl p-12">
      <h3 className={TITLE_CLASS}>Who Am I?</h3>
      <p>디자인 못하는 프론트엔드 개발자</p>
      <p>항상 피곤에 쩔어있음</p>
      <h3 className={TITLE_CLASS}>Career</h3>
      <p>한밭대학교(2022~)</p>
      <h3 className={TITLE_CLASS}>SKills</h3>
      <p>React, Next, GIt</p>
      <p>VSCode, Javascript</p>
    </article>
  );
}
