"use client";

import Logo from "@/public/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="relative max-w-[1118px] mx-auto px-6 md:px-0">
      <div className="flex justify-between items-center py-8">
        <div className="flex items-center">
          <Link href="/">
          <Image src={Logo} alt="logo" width={65} height={40} />
          </Link>
          <div className="hidden md:flex text-dark gap-4 text-[16px] pl-12">
            <Link href="/">Top Offers</Link>
            <Link href="/">Search in offers</Link>
            <Link href="/">References</Link>
            <Link href="/">About us</Link>
            <Link href="/">Our team</Link>
          </div>
        </div>
        <div className="hidden md:block btn-primary text-xs">
          Contact us
        </div>
        <button onClick={toggleSidebar} className="md:hidden">
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <Link href="/">
            Top Offers
          </Link>
          <Link href="/">
            Search in offers
          </Link>
          <Link href="/">
            References
          </Link>
          <Link href="/">
            About us
          </Link>
          <Link href="/">
            Our team
          </Link>
          <div className="btn-primary text-xs px-6 py-2 text-center mt-4">
            Contact us
          </div>
        </div>
      </div>
    </div>
  );
}
