const Koa = require("koa");
const app = new Koa();
const server = require("http").createServer(app.callback());
const { createServer } = require("./server");

const Client = require("./client");

createServer(server);

server.listen(6000, () => {
  console.log("server start");

  Client.openClient("http://127.0.0.1:6000");

  Client.addListener("hi", console.log);

  Client.sendMessage("test", { a: 2 }, data => {
    console.log(2, data);
  });
});
