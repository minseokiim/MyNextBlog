"use client";
import { Post } from "@/api/posts";
import React, { useState } from "react";
import GridPosts from "./GridPosts";
import Categories from "./Categories";

type Props = {
  posts: Post[];
  categories: string[];
};

// 상태를 이용하여, 현재 선택된 카테고리에 맞는 포스트들 보여주기
// -> 상태 가져야 하므로 클라이언트 컴포넌트!

const ALL_POSTS = "All Posts";

export default function FilterablePost({ posts, categories }: Props) {
  const [selected, setSelected] = useState(ALL_POSTS);
  const filtered =
    selected === ALL_POSTS
      ? posts
      : posts.filter((post) => post.category === selected);

  return (
    <section className="flex m-4">
      <GridPosts posts={filtered} />
      <Categories
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={setSelected}
        // onClick={(selected) => setSelected(selected)} 와 같은 뜻
      />
    </section>
  );
}
