"use client";

import { getUserInfo } from "@/utils";
import { Avatar } from "antd";

import styles from "./index.module.css";

export default function UserProfile() {
  const { username } = getUserInfo();
  return (
    <div className={styles.userProfileWrapper} title={username}>
      <Avatar size={35} shape="square">
        {username}
      </Avatar>
    </div>
  );
}
