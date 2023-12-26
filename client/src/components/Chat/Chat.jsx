import { SendOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { socket } from "../../socket";

export default function Chat() {
  const socketConnected = useSelector((state) => state.socket.connected);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const onSend = () => {
    socket.emit("message:new", { message: encodeURI(message) });
    setMessage("");
  };

  useEffect(() => {
    const onNewMessage = (msg) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("message:new", onNewMessage);

    return () => {
      socket.off("message:new");
    };
  }, []);

  useEffect(() => {
    if (socketConnected) {
      setMessages((prev) => [
        ...prev,
        { message: "You are Connected!", type: "system" },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { message: "You are Disconnected!", type: "system" },
      ]);
    }
  }, [socketConnected]);

  return (
    <>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div
            style={{
              display: "block",
              position: "relative",
              width: "100%",
              height: "60vh",
              border: "thin solid black",
              borderRadius: 10,
              backgroundColor: "lightblue",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <ul>
              {messages.map(({ message, type }, index) => {
                return (
                  <li
                    style={
                      type && type === "system"
                        ? {
                            color: "red",
                            margin: "10px 10px"
                          }
                        : {}
                    }
                    key={`message-${index}`}
                  >
                    {decodeURI(message)}
                  </li>
                );
              })}
            </ul>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row gutter={[10, 10]}>
        <Col span={20}>
          <Input
            disabled={!socketConnected}
            size="large"
            style={{ width: "100%" }}
            value={message}
            onChange={({ target: { value } }) => setMessage(value)}
          />
        </Col>
        <Col span={2}>
          <Button
            size="large"
            icon={<SendOutlined />}
            style={{ width: "100%" }}
            onClick={() => {
              onSend();
            }}
            disabled={!socketConnected}
          >
            Send
          </Button>
        </Col>
      </Row>
    </>
  );
}
