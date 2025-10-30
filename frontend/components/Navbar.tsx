"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/practice", label: "Practice" },
  { href: "/chat", label: "Ask AI Tutor" },
  { href: "/analytics", label: "Analytics" },
  { href: "/settings", label: "Settings" }
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">SAT Math AI</Link>
        <nav className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={clsx(
                "px-2 py-1 rounded-md hover:bg-gray-100",
                pathname === l.href && "bg-gray-100 font-medium"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm">
          <Link href="/login" className="px-3 py-1 rounded-md bg-black text-white">Login</Link>
        </div>
      </div>
    </header>
  );
}


