const express = require("express");
const socket = require("socket.io");

const app = express();

const server = app.listen(3000, function () {
  console.log("3000. port dinleniyor");
});
const io = socket(server);

io.on("connection", (socket) => {
  console.log("socket bağlantısı gerçekleşti. Bağlantı id'si :", socket.id);

  socket.on("chat", function (data) {
    io.sockets.emit("chat2", data);
  });

  socket.on("yaziyor...", function (data) {
    socket.broadcast.emit("yaziyor...", data);
  });
});
app.use(express.static("public"));
