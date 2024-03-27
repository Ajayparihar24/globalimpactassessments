"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import NavLinks from "./NavLinks";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { Menu } from "lucide-react";
import MobileNavLinks from "./MobileNavLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback(() => setOpen(prev => !prev), []);

  return (
    <header className="sticky right-0 left-0 top-0 py-4 px-4 bg-white shadow-sm dark:bg-black/40 backdrop-blur-lg z-50 flex items-center border-b-[1px] dark:border-neutral-600 justify-between">
      <button onClick={toggleOpen} className="md:hidden block">
        <Menu />
      </button>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="logo"
          width={130}
          height={130}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-4">
        <NavLinks />
        <ThemeSwitcher />
      </div>
      <MobileNavLinks open={open} onClose={toggleOpen} />
    </header>
  );
};

export default Navbar;
