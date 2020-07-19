const { subString } = require("../helper_func/substring");
const { commands } = require("../commands/index");

async function proccessMessage(msg) {
  let contents = msg.content;
  const trigger = "!";
  // nerd-bot only acts on !
  if (!contents.startsWith(trigger)) return;
  // strip the message contents only
  contents = subString(contents, trigger, 1, contents.length).toLowerCase();

  if (!commands[contents]) {
    msg.channel.send(`I don't know that one yet`);
    return;
  }
  commands[contents](msg);
}

exports.proccessMessage = proccessMessage;
