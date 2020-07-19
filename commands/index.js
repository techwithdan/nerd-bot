const { hello } = require("./hello");
const { roll_dice } = require("./roll_dice");

// list all commands here with the value as the function it points to
const commands = {
  hello: hello,
  "roll dice": roll_dice,
};

exports.commands = commands;
