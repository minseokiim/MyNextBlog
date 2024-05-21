import { getNonFeaturedPosts } from "@/api/posts";
import React from "react";
import CardPost from "./CardPost";
import MultiCarousel from "./MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();
  return (
    <section className="my-4">
      <h2 className="text-2xl font-bold my-2">NonFeaturedPosts</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <CardPost key={post.path} post={post} />
        ))}
      </MultiCarousel>
    </section>
  );
}
