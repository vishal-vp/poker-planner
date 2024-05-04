"use client";

import { Image } from "antd";
import UserProfile from "./UserProfile";

import styles from "./index.module.css";
import logo from "../../images/logo.png";
import Link from "next/link";
import { PATHS } from "@/app-constants";

export default function Header() {
  console.log(logo, "OGO>>>");
  return (
    <div className={styles.header}>
      <Link href={PATHS.HOME}>
        <Image
          alt="Home"
          src={logo.src}
          className={styles.logo}
          preview={false}
        />
      </Link>
      <UserProfile />
    </div>
  );
}
