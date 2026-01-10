import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);
  return (
    <Link
      className={`px-3 py-2 rounded transition ${
        isActive ? "bg-sky-500 text-white" : "text-gray-700"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
