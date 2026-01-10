"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const pass = prompt("Enter Password");
    if (pass == "1234") {
      router.push("/dashboard");
    }
  };
  return (
    <div className="text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 p-10 rounded">
      <h2 className="text-4xl font-bold">Welcome to dev story</h2>
      <button
        onClick={handleBtn}
        className="bg-sky-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-black duration-200"
      >
        Share Story
      </button>
    </div>
  );
};

export default Banner;
