import { Post } from "@/api/posts";
import React from "react";
import CardPost from "./CardPost";

export default function GridPosts({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.path}>
          <CardPost post={post} />
        </li>
      ))}
    </ul>
  );
}
