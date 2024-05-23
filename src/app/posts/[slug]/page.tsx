import { getPostData } from "@/api/posts";
import React from "react";
import Image from "next/image";
import PostContent from "@/components/PostContent";

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, path } = post;

  return (
    <article className="rounded-2xl overflow-hidden bg-gray-100 shadow-lg m-4">
      <Image
        className="w-full rounded-2xl h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <PostContent post={post} />
    </article>
  );
}
