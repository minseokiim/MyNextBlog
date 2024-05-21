import { Post } from "@/api/posts";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = { post: Post };
export default function CardPost({
  post: { title, description, date, category, path },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="rounded-md overflow-hidden shadow-lg">
        <Image
          className="w-full "
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          {/*truncate : 말 줄임표시 클래스, 너비를 지정해줘야 함. */}
          <span className="text-sm rounded-lg bg-green-100 px-2 my-2">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
