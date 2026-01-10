"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

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
        <NavLink href="/about">About</NavLink>
        <NavLink href="/stories">Stories</NavLink>
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/login">Login</NavLink>
        <NavLink href="/register">Register</NavLink>
      </nav>
    </div>
  );
};

export default Header;
