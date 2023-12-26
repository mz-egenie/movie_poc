import { BulbOutlined } from "@ant-design/icons";
import { Tag } from "antd";

export default function ConnectionState({ isConnected }) {
  return (
    <Tag color={isConnected ? "green" : "red"}>
      <BulbOutlined /> {isConnected ? "Connected" : "Disconnected"}
    </Tag>
  );
}
