module.exports = function (http) {
  const io = require("socket.io")(http);
  // var nsp = io.of("/events");
  // var private = io.of("/private");
  //Change io with nsp/private on line 6
  io.on("connection", function (socket) {
    console.log("user connected");
    // join room
    socket.on("join", function (data) {
      console.log("join session", data);
    });
    socket.on("Hello", function (data) {
      console.log(data.markus);
      io.emit("New game", { newGame: data.markus });
    });
    // disconnect
    socket.on("disconnect", function () {
      console.log("user disconnected");
    });
  });
};
