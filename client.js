const net = require("net");
const { IP, PORT } = require('./constants')

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
    conn.write("Name: LEH")
  })

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  })



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect,
};