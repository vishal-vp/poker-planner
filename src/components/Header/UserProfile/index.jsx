"use client";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "./index.module.css";
import { getUserInfo } from "../../../utils";

export default function UserProfile() {
  const { username } = getUserInfo();
  return (
    <div className={styles.userProfileWrapper} title={username}>
      <Avatar size={35} shape="square" icon={<UserOutlined />}></Avatar>
    </div>
  );
}
