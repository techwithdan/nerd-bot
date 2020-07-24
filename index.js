const discord = require("discord.js");
require("dotenv").config();
const bot = new discord.Client();
const token = process.env.BOT_TOKEN;
const axios = require('axios').default;
const { proccessMessage } = require("./events/message");

// event listeners

bot.on("ready", () => {
  console.log("this bot is online");
});

bot.on("message", proccessMessage);

bot.login(token);
