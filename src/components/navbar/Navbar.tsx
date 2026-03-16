"use client";
import Link from "next/link";
import { useState } from "react";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return(  <nav className="bg-green-500 text-white">
    <div className="max-w-full mx-auto px-6">
      <div className="flex justify-between items-center h-16">
        <Link href={"/"}>🎟 INDIE INDIE</Link>
        <div className="hidden md:flex gap-6">
          <Link href={"/about-us"} className="hover:text-yellow-400 transition">
            Về chúng tôi
          </Link>
          <Link href={"/events"} className="hover:text-yellow-400 transition">
            Sự kiện
          </Link>
          <Link href={"/merchs"} className="hover:text-yellow-400 transition">
            Merch
          </Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden px-6 pb-4 flex flex-col gap-3 bg-green-500">
        <Link href={"/about-us"}>Về chúng tôi</Link>
        <Link href={"/events"}>Sự kiện</Link>
        <Link href={"/merchs"}>Merch</Link>
      </div>
    )}
  </nav>)};
