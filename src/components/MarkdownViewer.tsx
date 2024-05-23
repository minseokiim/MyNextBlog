import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <Markdown remarkPlugins={[remarkGfm]} className="prose lg:prose-xl">
      {content}
    </Markdown>
  );
}
