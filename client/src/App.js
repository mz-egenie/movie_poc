import { useDispatch } from "react-redux";

import AppScreen from "./components/AppScreen/AppScreen";
import { useEffect, useState } from "react";
import { socket } from "./socket";
import ConnectionState from "./components/ConnectionState/ConnectionState";

import ConnectionManager from "./components/ConnectionManager/ConnectionManager";
import { onConnectionChange } from "./redux/socketSlice";
import { Col, Divider, Row, Space } from "antd";
import Chat from "./components/Chat/Chat";

function App() {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      dispatch(onConnectionChange(true));
    }

    function onDisconnect() {
      setIsConnected(false);
      dispatch(onConnectionChange(false));
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.connect();

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return (
    <AppScreen>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Space>
            <ConnectionState isConnected={isConnected} />
            <ConnectionManager isConnected={isConnected} />
          </Space>
        </Col>
        <Col></Col>
      </Row>
      <Divider />
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <Chat />
        </Col>
      </Row>
    </AppScreen>
  );
}

export default App;
