const { randomGenerator } = require("../helper_func/randomGenerator");
const randomResponses = [
  "Maybe you should make me smarter to answer",
  "I'm not sure",
  "what you want?",
  "can I help you?",
  "Yes?",
  "Not here",
  "Currently out for lunch",
  "How do I do that?",
  "no",
];

async function defaultResponse(msg, contents) {
  const randomIndex = randomGenerator(randomResponses.length);
  msg.channel.send(randomResponses[randomIndex]);
}

exports.defaultResponse = defaultResponse;
