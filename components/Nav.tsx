"use client";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-[var(--color-background)] text-[var(--color-dark-gray)] py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="VoiceZon Logo"
            width={100}
            height={10}
            priority
            className="cursor-pointer"
          />
        </Link>

        {/* Right-side Buttons */}
        <div className="flex items-center space-x-4">
          {/* <Link
            href="/login"
            className="px-4 py-2 rounded text-sm font-medium transition-colors hover:bg-[var(--color-light-peach)] hover:text-[var(--color-dark-teal)]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded bg-[var(--color-dark-teal)] text-[var(--color-background)] text-sm font-medium transition-colors hover:bg-[var(--color-dark-teal)]/90"
          >
            Sign Up
          </Link> */}
        </div>
      </div>
    </nav>
  );
}
