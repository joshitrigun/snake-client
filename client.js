const net = require("net");

const connect = () => {
  const conn = net.createConnection({
    host: "165.227.47.243", // IP address here,
    port: 50541, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });
  //const arrayDir = ["Move: up", "Move: right", "Move: up"];
  let startingTime = 50;

  conn.on("connect", () => {
    conn.write(`Name: XXX`);
    // for (let arr of arrayDir) {
    //   setTimeout(() => {
    //     conn.write(arr);
    //   }, startingTime);
    //   startingTime += 300;
    // }

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, startingTime);
  });
  return conn;
};

module.exports = { connect };
