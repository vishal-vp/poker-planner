"use client";

import { Table } from "antd";
import styles from "./index.module.css";
import { EyeInvisibleTwoTone, HourglassTwoTone } from "@ant-design/icons";

export default function EstimationsBoard({ roomData }) {
  const columns = [
    {
      title: "User",
      render: (userID) => roomData?.users?.[userID]?.username,
    },
    {
      title: "Estimate",
      render: (userID) => {
        const userEstimate = roomData?.estimates?.[userID];
        let content;
        let title = "";
        if (userEstimate) {
          if (roomData?.isVisible) {
            content = userEstimate;
          } else {
            content = <EyeInvisibleTwoTone />;
            title = "Estimate hidden";
          }
        } else {
          content = <HourglassTwoTone title="Waiting for estimate" />;
          title = "Waiting for estimate";
        }
        return (
          <div title={title} className={styles.estimateCell}>
            {content}
          </div>
        );
      },
    },
  ];
  return (
    <Table
      rowKey={(userID) => userID}
      pagination={false}
      dataSource={Object.keys(roomData?.users)}
      columns={columns}
      className={styles.estimationsBoard}
    />
  );
}
