const io = require("socket.io");

var s_socket = null;

var clientMap = new Map();

function createServer(server) {
  s_socket = io(server, { path: "/" });

  runDefaultListener();
}

function runDefaultListener() {
  s_socket.on("connection", client => {
    // 添加缓存中

    s_socket.sockets.emit("hi", "everyone");

    client.on("event", data => {
      /* … */
    });
    client.on("disconnect", () => {
      /* … */
    });
  });
}

function createSubPipe(sub_path) {
  return s_socket.of(sub_path);
}

function addListener() {}

function addSubListener(path, type, ...args) {
  s_socket.of(path).on(...args);
}

function removeListener() {}

function sendMessage() {}

module.exports = {
  createServer,
  createSubPipe
};
