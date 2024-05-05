"use client";

import { useEffect, useState } from "react";
import {
  ALLOWED_STORY_POINTS,
  USER_INFO_LOCALSTORAGE_KEY,
} from "../../app-constants";
import { getUserInfo } from "../../utils";
import {
  addEstimate,
  clearEstimates,
  joinRoom,
  registerCallbackForRoomData,
  setEstimateVisibility,
} from "../../firebase";
import EstimationsBoard from "../../components/EstimationsBoard";

import styles from "./index.module.css";
import { Button } from "antd";
import { useParams } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

export default function Room() {
  const [roomData, setRoomData] = useState({});

  const [userInfo] = useLocalStorage(USER_INFO_LOCALSTORAGE_KEY, {});
  const { userID } = userInfo;

  const params = useParams();

  const roomID = params?.roomID;
  const currentEstimate = roomData?.estimates?.[userID];
  const isOwner = roomData?.owner?.userID === userID;
  const isVisible = roomData?.isVisible;

  console.log(params, isOwner, roomData, "R DATA>>>>");

  useEffect(() => {
    joinRoom(roomID, userInfo);
    const { unsubscribe } = registerCallbackForRoomData(roomID, (value) =>
      setRoomData(value)
    );
    return () => unsubscribe();
  }, [roomID]);

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
