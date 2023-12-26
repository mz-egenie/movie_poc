// Setup basic express server
const express = require("express");
const app = express();
const path = require("path");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 8000;

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

// Routing
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
  // when the client emits 'new message', this listens and executes
  socket.on("message:new", (data) => {
    // we tell the client to execute 'new message'
    socket.emit("message:new", data);
  });

  // when the user disconnects.. perform this
  socket.on("disconnect", () => {
    console.log("socket disconnected!");
  });
});
