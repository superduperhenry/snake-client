const { IP, PORT } = require("./constants");

const net = require("net");

// establishes a connection with the game server

const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT, // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", (client) => {
    console.log(`Successfully connected to game server`);
    conn.write(`Name: HIT`);
  });

  return conn;
};

module.exports = { connect };
