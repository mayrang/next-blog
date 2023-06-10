import React from "react";

export type BannerData = {
  type: "success" | "error";
  message: string;
};

export default function Banner({ banner: { type, message } }: { banner: BannerData }) {
  const isSuccess = type === "success";
  const icon = isSuccess ? "👍" : "🔥";
  return (
    <div
      className={`rounded w-full text-center p-4 font-semibold ${type === "success" ? "bg-green-300" : "bg-red-300"}`}
    >
      {`${icon} ${message}`}
    </div>
  );
}
