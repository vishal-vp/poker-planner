import { USER_INFO_LOCALSTORAGE_KEY } from "@/app-constants";
import { Button, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function UsernameRequiredWrapper({ children }) {
  const { userID, username } = JSON.parse(
    localStorage.getItem(USER_INFO_LOCALSTORAGE_KEY) || "{}"
  ) || { username: undefined, userID: undefined };
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
      <Form onFinish={handleUsernameChange}>
        <FormItem
          rules={[{ required: true, message: "This field is required!" }]}
          name="username"
        >
          <Input placeholder="Please enter your username" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}
