import { X } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

type Props = {
  onClose: () => void;
  open: boolean;
};

const MobileNavLinks = ({ onClose, open }: Props) => {
  const pathname = usePathname();

  const [hover, setHover] = useState(false);

  const onMouseEnter = useCallback(() => setHover(true), []);
  const onMouseLeave = useCallback(() => setHover(false), []);

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 500);
  };
  return (
    <div
      className={`fixed inset-0 ${
        open ? "translate-x-0 opacity-100" : "-translate-x-[900px] opacity-0"
      }  transition duration-300 h-screen bg-black/30 dark:bg-black/20 z-50 md:hidden block`}
    >
      <div className="bg-white dark:bg-black w-72 fixed left-0 top-0 bottom-0 h-screen rounded-r-lg">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={20} />
        </button>

        <ul className="flex flex-col px-4 mt-14 items-center gap-6">
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
                  onClick={() => (link.path ? handleClose() : null)}
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
                          className="absolute left-[180px] -top-1/2 -translate-y-1/2"
                        >
                          <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
                          <div className="absolute left-0 top-6  h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white dark:bg-neutral-800" />
                          <div className=" p-4 rounded shadow bg-white dark:bg-neutral-800 flex flex-col gap-3 z-10">
                            {link.subLinks.map((item, idx) => (
                              <Link
                                onClick={handleClose}
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
      </div>
    </div>
  );
};

export default MobileNavLinks;
