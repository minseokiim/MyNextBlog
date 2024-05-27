import React from "react";

export type BannerData = {
  message: string;
  state: "success" | "failed";
};
export default function Banner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === "success";
  const icon = isSuccess ? "✔️" : "😫";

  return (
    <p
      className={`p-2 rounded-xl w-full text-center  ${
        isSuccess ? "bg-green-200" : "bg-red-200"
      }`}
    >{`${icon}  ${message}`}</p>
  );
}
