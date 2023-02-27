const { MOVES, MESSAGES } = require("./constants");
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (MOVES[key]) {
    connection.write(MOVES[key]);
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};

module.exports = { setupInput };
