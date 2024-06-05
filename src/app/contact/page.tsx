import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "contact me",
  description: "메일 보내기기",
};

export default function ContactPage() {
  return (
    <>
      <Contact />
    </>
  );
}
