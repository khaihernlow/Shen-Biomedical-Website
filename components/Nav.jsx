"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex items-center lg:justify-start justify-between w-full py-3 lg:px-10 px-2.5 border-b">
      <Link href="/" className="flex gap-1 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={70}
          height={30}
          className="cursor-pointer object-contain"
        />
        <Image
          src="/assets/images/logo-text.svg"
          alt="logo-text"
          width={130}
          height={30}
          className="cursor-pointer object-contain mr-10"
        />
      </Link>
      <div className="options lg:flex hidden gap-10 h-full">
        <Link href="/info" className="option">
          Information
        </Link>
        <Link href="/research" className="option">
          Research Areas
        </Link>
        <Link href="/resources" className="option">
          Resources
        </Link>
      </div>
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 lg:hidden cursor-pointer"
          onClick={() => setToggleDropdown(!toggleDropdown)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {toggleDropdown && (
          <div className="dropdown">
            <Link
              href="/info"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Information
            </Link>
            <Link
              href="/research"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Research
            </Link>
            <Link
              href="/resources"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Resources
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
