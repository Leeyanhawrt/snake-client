const net = require("net");
const { connect } = require('./client')
const { setupInput } = require("./input");
const { stdin } = require("process");




setupInput(connect());

// establishes a connection with the game server

console.log("Connecting ...");
