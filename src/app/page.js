"use client";

import { generateRoomURLFromID, getUserInfo } from "@/utils";
import styles from "./page.module.css";
import { Button, Form, Input, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { createRoom, joinRoom } from "@/firebase";

export default function Home() {
  const userInfo = getUserInfo();
  const router = useRouter();

  function handleJoinRoom(values) {
    router.push(generateRoomURLFromID(values?.roomID));
  }

  function handleCreateNewRoom() {
    const roomID = nanoid();
    createRoom(roomID, { owner: userInfo });
    joinRoom(roomID, userInfo);
    router.push(generateRoomURLFromID(roomID));
  }

  return (
    <main className={styles.main}>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        onFinish={handleJoinRoom}
        onError={() =>
          message.error(
            "Unable to submit. Please check the form and try again."
          )
        }
      >
        <FormItem
          label="Room ID"
          name="roomID"
          rules={[{ required: true, message: "Room ID is required!" }]}
        >
          <Input />
        </FormItem>
        <FormItem wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Join Room
          </Button>
        </FormItem>
      </Form>
      <Button type="primary" onClick={handleCreateNewRoom}>
        Create New Room
      </Button>
    </main>
  );
}
