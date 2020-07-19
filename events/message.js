const nerdBotId = process.env.NERD_BOT_USER_ID;
const { subString } = require("../helper_func/substring");
const { commands } = require("../commands/index");

async function proccessMessage(msg) {
  let contents = msg.content;
  // nerd-bot only acts on @mentions to it
  if (!contents.toLowerCase().includes(nerdBotId)) return;

  // strip the message contents only
  // sets all chars lowercase
  contents = subString(contents, ">", 1, contents.length).toLowerCase();
  console.log(contents);

  if (!commands[contents]) {
    msg.reply(`I don't know that one yet`);
    return;
  }
  commands[contents](msg);
}

exports.proccessMessage = proccessMessage;
