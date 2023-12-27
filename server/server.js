// Setup basic express server
const express = require("express");
const app = express();
const colors = require("colors");
const router = require("./controllers/router");
const movieRouter = require("./controllers/movieRouter");
const { databaseConnectionString } = require("./database/constants");
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
const port = process.env.PORT || 8000;
const cors = require("cors");

server.listen(port, () => {
  console.log("Server listening at port %d", port);
});

console.log(databaseConnectionString.green);

mongoose
  .connect(databaseConnectionString, {})
  .then(() => {
    console.log("MongoDB Connected".green.bold);
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:".red, err);
  });

app.disable("etag");
app.use(cors());
// Routing
app.use(express.json());
app.use("/", router);
app.use("/api/movies", movieRouter);

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
