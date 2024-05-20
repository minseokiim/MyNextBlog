import React from "react";
import GridPosts from "./GridPosts";
import { getFeaturedPosts } from "@/api/posts";

export default async function FeaturedPosts() {
  // 데이터 읽어와서 뿌려줘야함.
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className="text-2xl font-bold">Featured Posts</h2>
      <GridPosts posts={posts} />
    </section>
  );
}
