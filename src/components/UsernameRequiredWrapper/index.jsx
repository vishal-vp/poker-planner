"use client";

import { useState } from "react";
import { getUserInfo } from "../../utils";
import styles from "./index.module.css";
import { nanoid } from "nanoid";
import { USER_INFO_LOCALSTORAGE_KEY } from "../../app-constants";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";

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
