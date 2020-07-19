const { randomGenerator } = require("../helper_func/randomGenerator");
function roll_dice(msg) {
  const diceNumber = 6;
  msg.reply(randomGenerator(diceNumber));
}

exports.roll_dice = roll_dice;
