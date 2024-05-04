"use client";

import { ALLOWED_STORY_POINTS } from "@/app-constants";
import {
  addEstimate,
  clearEstimates,
  joinRoom,
  registerCallbackForRoomData,
  setEstimateVisibility,
} from "@/firebase";
import { getUserInfo } from "@/utils";
import { Button } from "antd";
import { useEffect, useState } from "react";
import EstimationsBoard from "./EstimationsBoard";
import styles from "./page.module.css";

export default function Room({ params }) {
  const [roomData, setRoomData] = useState({});

  const userInfo = getUserInfo();
  const { userID } = userInfo;

  const roomID = params?.roomID;
  const currentEstimate = roomData?.estimates?.[userID];
  const isOwner = roomData?.owner?.userID === userID;
  const isVisible = roomData?.isVisible;

  useEffect(() => {
    joinRoom(roomID, userInfo);
    const { unsubscribe } = registerCallbackForRoomData(roomID, (value) =>
      setRoomData(value)
    );
    return () => unsubscribe();
  }, [roomID, userInfo]);

  return (
    <div className={styles.room}>
      <div className={styles.roomControls}>
        <Button
          onClick={() => {
            setEstimateVisibility(roomID, false);
            clearEstimates(roomID);
          }}
          disabled={!isOwner}
          danger
        >
          Delete Estimates
        </Button>
        <Button
          onClick={() => setEstimateVisibility(roomID, !isVisible)}
          disabled={!isOwner}
        >{`${isVisible ? "Hide" : "Show"} Estimates`}</Button>
      </div>
      <div className={styles.allowedStoryPointsContainer}>
        {ALLOWED_STORY_POINTS?.map((storyPoint) => {
          return (
            <Button
              type={currentEstimate === storyPoint ? "primary" : "default"}
              key={storyPoint}
              onClick={() => addEstimate(roomID, userID, storyPoint)}
            >
              {storyPoint}
            </Button>
          );
        })}
      </div>
      {roomData?.users && <EstimationsBoard roomData={roomData} />}
    </div>
  );
}
