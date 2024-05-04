"use client";

import { generateRoomURLFromID, getUserInfo } from "@/utils";
import styles from "./page.module.css";
import { Button } from "antd";
import { nanoid } from "nanoid";
import { useRouter } from "next/navigation";
import { createRoom, joinRoom } from "@/firebase";

export default function Home() {
  const userInfo = getUserInfo();
  const router = useRouter();

  function handleCreateNewRoom() {
    const roomID = nanoid();
    createRoom(roomID, { owner: userInfo });
    joinRoom(roomID, userInfo);
    router.push(generateRoomURLFromID(roomID));
  }

  return (
    <main className={styles.main}>
      <Button type="primary" onClick={handleCreateNewRoom}>
        Create New Room
      </Button>
    </main>
  );
}
