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
        if (userEstimate) {
          return (
            <center>
              {roomData?.isVisible ? userEstimate : <EyeInvisibleTwoTone />}
            </center>
          );
        } else {
          return (
            <center>
              <HourglassTwoTone />
            </center>
          );
        }
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
