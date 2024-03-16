"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/app/page.module.css";

const AppHeader = () => {
  const pathname = usePathname();

  return (
    <header className={styles.homeHeader}>
      <nav>
        <Link
          className={pathname === "/profile" ? styles.active : ""}
          href="/profile"
        >
          Profile
        </Link>
        <Link
          className={pathname === "/home" ? styles.active : ""}
          href="/home"
        >
          Salsila
        </Link>
        <Link
          className={pathname === "/user-settings" ? styles.active : ""}
          href="/user-settings"
        >
          Settings
        </Link>
      </nav>
    </header>
  );
};

export default AppHeader;
