import { List, Table, Typography } from "antd";
import styles from "./index.module.css";
import Item from "antd/es/list/Item";

const { Text } = Typography;

export default function EstimationsBoard({ roomData }) {
  const columns = [
    {
      title: "User",
      render: (userID) => roomData?.users?.[userID]?.username,
    },
    {
      title: "Estimate",
      render: (userID) => {
        const userEstimate =
          roomData?.estimates?.[userID] || "Not estimated yet";
        return roomData?.isVisible ? userEstimate : "X";
      },
    },
  ];
  return (
    <Table
      pagination={false}
      dataSource={Object.keys(roomData?.users)}
      columns={columns}
      className={styles.estimationsBoard}
    />
  );
}