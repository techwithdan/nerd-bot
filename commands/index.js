const { hello } = require("./hello");

// list all commands here with the value as the function it points to
const commands = {
  hello: hello,
};

exports.commands = commands;
