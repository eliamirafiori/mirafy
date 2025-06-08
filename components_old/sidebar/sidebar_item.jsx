"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

export default function SidebarItem({ label, href }) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={twMerge(
        "flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1",
        active && "text-white"
      )}
    >
      {href === "/" && <HiHome size={26} />}
      {href === "/search" && <BiSearch size={26} />}
      <p className="truncate w-full">{label}</p>
    </Link>
  );
}
