"use client";
import React from "react";

const TitleClass = "text-2xl font-bold my-2 text-gray-800";
const ContentClass = "pt-2 pb-3";

export default function Info() {
  return (
    <section className="text-center m-8 bg-gray-100 shadow-lg p-8">
      <h2 className={TitleClass}>Who Am I?</h2>
      <p className={ContentClass}>
        프론트엔드 개발 레츠고
        <br />
        ㅋㅋ
      </p>
      <h2 className={TitleClass}> Career</h2>
      <p className={ContentClass}>없는디요</p>
      <h2 className={TitleClass}> Skills</h2>
      <p className={ContentClass}>React, Next, Typescript, Git, Vs Code</p>
    </section>
  );
}
