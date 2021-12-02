const { connect } = require("./client");

// establishes a connection with the game server

console.log("Connecting ...");
//connect();
const con = connect();
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (data) {
  // your code here
  if (data === "\u001b[A") con.write("Move: up");
  if (data === "\u001b[B") con.write("Move: down");
  if (data === "\u001b[C") con.write("Move: right");
  if (data === "\u001b[D") con.write("Move: left");
};

setupInput();
