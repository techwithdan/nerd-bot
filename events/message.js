const { subString } = require("../helper_func/substring");
const { commands } = require("../commands/index");
const { defaultResponse } = require("../commands/default");
const nerd_bot_user_id = process.env.NERD_BOT_USER_ID;

async function proccessMessage(msg) {
  let contents = msg.content;
  const trigger = "!";
  
  // nerd-bot only acts on ! or @nerd-bot
  if (!contents.startsWith(trigger) && !contents.startsWith(nerd_bot_user_id))
    return;

  // strip the message contents only
  contents = subString(contents, trigger, 1, contents.length).toLowerCase();

  // separates the command from the contents
  const command = contents.split(" ")[0];


  // check if a command exist
  if (!commands[command]) {
    defaultResponse(msg, contents);
    return;
  }
  commands[command](msg, contents);
}

exports.proccessMessage = proccessMessage;
