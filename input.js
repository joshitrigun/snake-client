const { connect } = require("./client");
const { MESSAGES } = require("./constants");
const con = connect();

console.log("Connecting ...");

let connection;
const setupInput = (con) => {
  connection = con;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (data) {
  // your code here
  console.log({ data });
  if (data === "w" || data === "\u001b[A") con.write("Move: up");
  if (data === "s" || data === "\u001b[B") con.write("Move: down");
  if (data === "d" || data === "\u001b[C") con.write("Move: right");
  if (data === "a" || data === "\u001b[D") con.write("Move: left");
  if (MESSAGES[data]) {
    con.write(MESSAGES[data]);
  }
  if (data === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput, handleUserInput };
