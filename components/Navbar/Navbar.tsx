"use client";
import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Music", url: "/music" },
    { title: "Shows", url: "/shows" },
  ];
  return (
    <>
      <nav className={styles.navbar}>
        <ul className={styles.navlinks}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <li className={styles.li_navlink}>
                <Link
                  className={`${styles.navlink} ${
                    pathname === link.url ? styles.actual_page : ""
                  }`}
                  href={link.url}
                >
                  {link.title}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};
