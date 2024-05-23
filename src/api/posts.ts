// json 파일 읽어오는 로직
// 컴포넌트 아닌 순수 타입스트립트 로직 담당 모듈

import { readFile } from "fs/promises";
import path from "path";
import { metadata } from "./../app/layout";

export type Post = {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
};

export type PostData = Post & {
  content: string;
  next: Post | null;
  prev: Post | null;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => post.featured));
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  return getAllPosts().then((posts) => posts.filter((post) => !post.featured));
}

export async function getPostData(fileName: string): Promise<PostData> {
  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);

  const posts = await getAllPosts();
  const post = posts.find((post) => post.path === fileName);
  //이렇게 분리한 이유 : 포스트 배열을 만들어서 이전, 다음 포스트들을 가져올 수 있음

  if (!post) throw Error(`${fileName}에 해당하는 포스트를 찾을 수 없습니다.`);

  const index = posts.indexOf(post);
  const next = index > 0 ? posts[index - 1] : null; //이전 포스트가 최신 포스트
  const prev = index < posts.length - 1 ? posts[index + 1] : null;

  const content = await readFile(filePath, "utf-8");

  return { ...post, content, next, prev };
}
