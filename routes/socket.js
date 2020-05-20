let connectedUsers = [];

module.exports = function (http) {
  const io = require("socket.io")(http);
  // var nsp = io.of("/events");
  // var private = io.of("/private");
  //Change io with nsp/private on line 6
  io.on("connection", function (socket) {
    console.log("user connected");
    // join room
    socket.on("join", function (data) {
      connectedUsers.push(data.username);
      connectedUsers = [...new Set(connectedUsers)];
      io.emit("connected-users", {
        connectedUsers: connectedUsers,
      });
    });
    //Send new game
    socket.on("set-game", function (data) {
      console.log(data.newGame);
      io.emit("send-game", { newGame: data.newGame });
    });
    //User logged out
    socket.on("left", function (data) {
      connectedUsers = connectedUsers.filter((user) => user !== data.username);
      io.emit("connected-users", {
        connectedUsers: connectedUsers,
      });
    });

    // disconnect
    socket.on("disconnect", function () {
      console.log("user disconnected");
    });
  });
};
