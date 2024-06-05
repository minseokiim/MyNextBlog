import { getAllPosts } from "@/api/posts";
import FilterablePost from "@/components/FilterablePost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "all posts",
  description: "블로그 글",
};

export default async function Post() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  //Set은 중복이 허용 안되므로! 카테고리 배열 만들때 중복 제거됨

  return (
    <FilterablePost posts={posts} categories={categories}></FilterablePost>
  );
}
