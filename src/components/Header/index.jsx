"use client";

import { Image } from "antd";

import styles from "./index.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { PATHS } from "../../app-constants";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to={PATHS.HOME}>
        <Image alt="Home" src={logo} className={styles.logo} preview={false} />
      </Link>
      <UserProfile />
    </div>
  );
}
