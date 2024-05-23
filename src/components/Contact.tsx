import React from "react";
import SendEmail from "./SendEmail";
import { AiFillGithub } from "react-icons/ai";
import { FaBlog } from "react-icons/fa6";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/minseokiim" },
  { icon: <FaBlog />, url: "https://kmmk808.tistory.com/" },
];

export default function Contact() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="font-bold text-3xl my-2">Contact Me</h2>
      <p>seoommm8@gmail.com</p>

      {/* 페이지 내에서 이동 ->Link, 다른 페이지로 이동 ->a */}
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-5xl hover:text-green-400"
          >
            {link.icon}
          </a>
        ))}
      </ul>
      <h2 className="font-bold text-3xl my-8">Or send me an email</h2>
      <SendEmail />
    </section>
  );
}
