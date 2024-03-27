import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";


const NavLinks = () => {
  const pathname = usePathname();

  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);

  return (
    <nav>
      <ul className="hidden md:flex items-center gap-4">
        {navLinks.map((link, index) => {
          const hasSublink = link.subLinks;
          return (
            <li
              onMouseEnter={hasSublink && onMouseEnter}
              onMouseLeave={hasSublink && onMouseLeave}
              key={index}
              className="relative list-none"
            >
              <Link
                href={link.path ? link.path : ""}
                className={`text-sm flex gap-1 items-center hover-underline-animation ${
                  pathname === link.path ? "active" : ""
                }`}
              >
                {link.name}
                {link?.subLinks && link.subLinks.length > 0 && (
                  <span className="mt-1">
                    <ChevronDown size={16} />
                  </span>
                )}
                {link.subLinks && (
                  <AnimatePresence>
                    {hover && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute text-blox left-1/2 top-12 "
                      >
                        <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                        <div className="absolute  left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white dark:bg-neutral-800" />
                        <div className=" bg-white dark:bg-neutral-800 p-4 rounded shadow-md flex flex-col gap-3 z-10">
                          {link.subLinks.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.path}
                              className="text-sm whitespace-nowrap"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
