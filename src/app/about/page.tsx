import Info from "@/components/Info";
import Main from "@/components/Main";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "about me",
  description: "커리어 소개",
};

export default function About() {
  return (
    <>
      <Main />
      <Info />
    </>
  );
}
