"use client";

import { USER_INFO_LOCALSTORAGE_KEY } from "@/app-constants";
import { getUserInfo } from "@/utils";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { nanoid } from "nanoid";
import { useState } from "react";

import styles from "./index.module.css";

export default function UsernameRequiredWrapper({ children }) {
  const { username, userID } = getUserInfo();
  const [isUserNewlyCreated, setIsUserNewlyCreated] = useState(false);

  function handleUsernameChange(values) {
    const userID = nanoid();
    localStorage.setItem(
      USER_INFO_LOCALSTORAGE_KEY,
      JSON.stringify({ userID, username: values?.username })
    );
    setIsUserNewlyCreated(true);
  }

  if (isUserNewlyCreated || (userID && username)) {
    return children;
  } else {
    return (
      <Form
        className={styles.usernameRequiredWrapper}
        onFinish={handleUsernameChange}
        wrapperCol={{ span: 24 }}
      >
        <FormItem
          rules={[{ required: true, message: "This field is required!" }]}
          name="username"
        >
          <Input placeholder="Please enter your username" />
        </FormItem>
        <FormItem wrapperCol={{ offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}
