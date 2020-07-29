const { hello } = require("./hello");
const { roll } = require("./roll");
const { help } = require("./help");
const { deleteFunc } = require("./delete");
const { catFacts } = require("./catFacts");
const { advice } = require("./advice");

// list all commands here with the value as the function it points to
const commands = {
  hello: hello,
  roll: roll,
  help: help,
  delete: deleteFunc,
  cats: catFacts,
  advice: advice,
};

exports.commands = commands;
