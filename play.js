const net = require("net");
const { connect } = require('./client')
const { setupInput } = require("./input");
const { stdin } = require("process");


connect();

setupInput();

// establishes a connection with the game server

console.log("Connecting ...");
