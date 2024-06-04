"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/api/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function SendEmail() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);

  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    sendContactEmail(form)
      .then(() => {
        setBanner({ message: "메일 보내기 성공 !", state: "success" });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: "메일 보내기 실패 ㅠㅠ", state: "failed" });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="w-96">
      {banner && <Banner banner={banner} />}

      <form
        onSubmit={onSubmit}
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
      >
        {/* htmlFor로 input 아이디를 적어 연결 */}
        <label htmlFor="from" className="font-semibold">
          Your email
        </label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
          className="text-black"
        />

        <label htmlFor="subject" className="font-semibold">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
          className="text-black"
        />

        <label htmlFor="message" className="font-semibold">
          Message
        </label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          className="text-black"
        />

        <button className="bg-yellow-200 font-semibold text-black hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}
