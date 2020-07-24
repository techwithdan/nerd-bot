function help(msg) {
  const embedOject = {
    embed: {
      title: "Things I can do",
      color: "0x40e0d0",
      description:
        "Run any of the following commands using ! as a prefix e.g !roll. Any commands followed by {} means that it is placeholder for an actual value be passed",
      fields: [
        {
          name: "!roll",
          value: "randomly rolls a number between 1-100; good luck!",
        },
        {
          name: "!hello",
          value: "Friendly greeting from nerd-bot",
        },
        {
          name: "!help",
          value: "Provides a list of commands for you to enjoy",
        },
        {
          name: "!delete messages {number}",
          value:
            "Delete messages from bottom up where {number} is the amount of messages to be deleted",
        },
      ],
    },
  };
  msg.channel.send("Here you go ", embedOject);
}

exports.help = help;
