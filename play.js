const { setupInput, handleUserInput } = require("./input");
// establishes a connection with the game server

const input = setupInput();
input.on("data", handleUserInput);
