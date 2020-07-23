function deleteFunc(msg, contents) {
  const allowedDeleteOptions = {
    messages: deleteMessages,
  };
  const [command, message, number] = contents.split(" ");
  if (allowedDeleteOptions[message]) allowedDeleteOptions[message](msg, number);
}

function deleteMessages(msg, number) {
  msg.channel.bulkDelete(number);
}
exports.deleteFunc = deleteFunc;
