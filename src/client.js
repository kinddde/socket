var io = require("socket.io-client");

var socket = null;

var MESSAGE_BEFORE = [];
var EVENT_BEFORE = [];

function openClient(url) {
  socket = io(url, { transports: ["websocket"] });

  runListener();
}

function runListener() {
  socket.on("connect", function() {
    console.log("client connect");
  });

  socket.on("disconnect", function() {
    console.log("client disconnect");
  });

  socket.on("error", function() {
    console.log("client error");
  });
}

function getSocket() {
  return socket;
}

function checked() {
  return socker.connected;
}

function refresh() {}

/**
 *  一次监听
 */
function addOnceListener(...args) {
  socket.once(...args);
}

/**
 *  监听事件
 */
function addListener(...args) {
  socket.on(...args);
}

/**
 *  移除监听事件
 */
function removeListener(...args) {
  socket.off(...args);
}

/**
 *  推送消息
 * @param  {[type]} args [description]
 * @return {[type]}      [description]
 */
function sendMessage(...args) {
  socket.emit(...args);
}

module.exports = {
  openClient,
  addOnceListener,
  addListener,
  removeListener,
  sendMessage
};
