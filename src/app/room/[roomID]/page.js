"use client";

import { ALLOWED_STORY_POINTS } from "@/app-constants";
import { Button } from "antd";
import { useState } from "react";

export default function Room({ params }) {
  const [selectedStoryPoint, setSelectedStoryPoint] = useState();

  return (
    <>
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
