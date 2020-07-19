const { hello } = require("./hello");
const { roll } = require("./roll");

// list all commands here with the value as the function it points to
const commands = {
  hello: hello,
  roll: roll,
};

exports.commands = commands;
