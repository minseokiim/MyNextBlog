import { Post } from "@/api/posts";
import React from "react";
import CardPost from "./CardPost";

export default function GridPosts({ posts }: { posts: Post[] }) {
  return (
    <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <CardPost post={post} />
        </li>
      ))}
    </ul>
  );
}
