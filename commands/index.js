const { hello } = require("./hello");
const { roll } = require("./roll");
const { help } = require("./help");
const { deleteFunc } = require("./delete");
// list all commands here with the value as the function it points to
const commands = {
  hello: hello,
  roll: roll,
  help: help,
  delete: deleteFunc,
};

exports.commands = commands;
