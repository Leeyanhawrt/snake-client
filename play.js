const net = require("net");
const { stdin } = require("process");
const client = require('./client')

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};


const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  })
};

setupInput();
client.connect();

// establishes a connection with the game server

console.log("Connecting ...");
