function help(msg) {
  const embedOject = {
    embed: {
      title: "Things I can do",
      description:
        "Run any of the following commands using ! as a prefix e.g !roll. Any commands followed by ${} means that it is placeholder for an actual value be passed",
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
          name: "!delete ${number}",
          value: "Delete messages from bottom up where",
        },
      ],
    },
  };
  msg.channel.send("Here you go ", embedOject);
}

exports.help = help;
