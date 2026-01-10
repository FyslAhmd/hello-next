import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-4 min-h-screen">
      <div className="col-span-2">
        <Link href={"/dashboard"} className="text-2xl text-center font-semibold">Navigations</Link>
        <div className="flex flex-col gap-5 mt-5">
            <Link className="bg-gray-400 px-4 py-2 rounded" href={"/dashboard/add-story"}>Add Story</Link>
            <Link className="bg-gray-400 px-4 py-2 rounded" href={"/dashboard/my-profile"}>My Profile</Link>
            <Link className="bg-gray-400 px-4 py-2 rounded" href={"/dashboard/settings"}>Settings</Link>
        </div>
      </div>
      <div className="col-span-10">{children}</div>
    </div>
  );
};

export default DashboardLayout;
