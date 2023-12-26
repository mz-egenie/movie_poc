import { Button, Space } from "antd";
import { socket } from "../../socket";

import { PiPlugsConnected } from "react-icons/pi";
import { TbPlugConnected } from "react-icons/tb";

export default function ConnectionManager({ isConnected }) {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <Space>
      <Button
        disabled={isConnected}
        icon={<PiPlugsConnected />}
        onClick={connect}
      >
        Connect
      </Button>
      <Button
        disabled={!isConnected}
        icon={<TbPlugConnected />}
        onClick={disconnect}
      >
        Disconnect
      </Button>
    </Space>
  );
}
