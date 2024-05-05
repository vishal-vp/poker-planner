import { useNavigate } from "react-router-dom";
import { generateRoomURLFromID, getUserInfo } from "../../utils";
import { createRoom, joinRoom } from "../../firebase";

import { nanoid } from "nanoid";

import styles from "./index.module.css";
import { Button } from "antd";

export default function Home() {
  const userInfo = getUserInfo();
  const navigate = useNavigate();

  function handleCreateNewRoom() {
    const roomID = nanoid();
    createRoom(roomID, { owner: userInfo });
    joinRoom(roomID, userInfo);
    navigate(generateRoomURLFromID(roomID));
  }

  return (
    <main className={styles.main}>
      <Button type="primary" onClick={handleCreateNewRoom}>
        Create New Room
      </Button>
    </main>
  );
}
