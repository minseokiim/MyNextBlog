import React from "react";
import profileImage from "../images/profile.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="pics"
        width={200}
        priority
      ></Image>
      <h2 className="text-2xl font-bold mt-2"> MinSeo Kim</h2>
      <h3 className="text-xl font-semibold"> FrontEnd Developer</h3>
      <p>안녕하세요,</p>
      <Link href="/contact">
        <button className="bg-green-500 text-white rounded-xl py-1 px-4 mt-2 font-bold">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
