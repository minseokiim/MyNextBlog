import { getPostData } from "@/api/posts";
import MarkdownViewer from "@/components/MarkdownViewer";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};
export default async function page({ params: { slug } }: Props) {
  const post = await getPostData(slug);

  return (
    <>
      <h1>{post.title}</h1>
      <MarkdownViewer content={post.content} />
    </>
  );
}
