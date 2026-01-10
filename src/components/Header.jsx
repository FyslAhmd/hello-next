"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/dashboard")) {
    return null;
  }
  return (
    <div className="px-4 py-3 border-b-2 border-gray-500 flex items-center justify-between flex-wrap">
      <Link href="/" className="text-xl font-semibold">
        Dev Story
      </Link>

      <nav className="text-xl space-x-4">
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </nav>
    </div>
  );
};

export default Header;
