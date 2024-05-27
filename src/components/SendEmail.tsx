"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function SendEmail() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="bg-gray-300">
      <form onSubmit={onSubmit}>
        {/* htmlFor로 input 아이디를 적어 연결 */}
        <label htmlFor="from">Your email</label>
        <input
          type="email"
          id="from"
          name="from"
          required
          autoFocus
          value={form.from}
          onChange={onChange}
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          rows={10}
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}
