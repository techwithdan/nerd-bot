const { randomGenerator } = require("../helper_func/randomGenerator");
const randomGreetings = [
  "Hi!",
  "Yo",
  "what you want?",
  "can I help you?",
  "Yes?",
  "Not here",
  "Currently out for lunch",
];

function hello(msg) {
  const randomIndex = randomGenerator(randomGreetings.length);
  msg.reply(randomGreetings[randomIndex]);
}

exports.hello = hello;
