"use client";

import { ALLOWED_STORY_POINTS } from "@/app-constants";
import { registerCallbackForRoomData } from "@/firebase";
import { Button } from "antd";
import { useEffect, useState } from "react";

export default function Room({ params }) {
  const [selectedStoryPoint, setSelectedStoryPoint] = useState();
  useEffect(() => {
    const { unsubscribe } = registerCallbackForRoomData(
      params?.roomID,
      (value) => console.log(value)
    );
    return () => unsubscribe();
  }, [params?.roomID]);

  return (
    <>
      <Button>Delete Estimates</Button>
      <Button>Show Estimates</Button>
      {ALLOWED_STORY_POINTS?.map((storyPoint) => {
        return (
          <Button
            type={selectedStoryPoint === storyPoint ? "primary" : "default"}
            key={storyPoint}
            onClick={() => setSelectedStoryPoint(storyPoint)}
          >
            {storyPoint}
          </Button>
        );
      })}
    </>
  );
}
