const { randomGenerator } = require("../helper_func/randomGenerator");
function roll(msg) {
  const maxNumber = 100;
  const randomNumber = randomGenerator(maxNumber);
  msg.channel.send(
    randomNumber == 100
      ? `100, Winner!`
      : randomNumber == 1
      ? `1, Better luck next time`
      : randomNumber
  );
}

exports.roll = roll;
