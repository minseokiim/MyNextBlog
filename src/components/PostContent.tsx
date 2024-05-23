import React from "react";
import MarkdownViewer from "@/components/MarkdownViewer";
import { AiTwotoneCalendar } from "react-icons/ai";
import { PostData } from "@/api/posts";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-blue-900">
        <AiTwotoneCalendar />
        <p className="font-semibold ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-semibold">{description}</p>

      {/* 간격을 주기 위해 div 사용 */}
      <div className="w-44 border-2 border-blue-900 mt-4 mb-2"></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
