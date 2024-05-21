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
      <Image
        src={`/images/posts/${path}.png`}
        alt={title}
        width={300}
        height={200}
      />
      <div>
        <time>{date.toString()}</time>
        <h3>{title}</h3>
        <p>{description}</p>
        <span>{category}</span>
      </div>
    </Link>
  );
}
