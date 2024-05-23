import { Post } from "@/api/posts";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

type Props = {
  post: Post;
  type: "prev" | "next";
};

const ICON_CLASS =
  "text-5xl m-4 text-yellow-300 translate-all group-hover:text-6xl";
export default function AdjacentPostCard({
  post: { path, title, description },
  type,
}: Props) {
  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={150}
        className="w-full opacity-40"
      />
      {/* 오버레이 되게 */}
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 flex justify-around items-center text-white ">
        {type === "prev" && <FaArrowLeft className={ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold"> {title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ICON_CLASS} />}
      </div>
    </Link>
  );
}
