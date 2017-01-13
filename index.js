var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {

  let prefix="-"

  if(!msg.content.startsWith(prefix)) return;
  if (msg.content.startsWith(prefix + "fuck")) {
    msg.channel.sendMessage("Fuck Smegs!");
  }
});

bot.on('ready', () => {
  console.log('I am ready');
})

bot.login("MjY5NDg1MDY0ODAxMzUzNzM4.C1qBKQ.q8FGymK1NwvFzKuF1Grx4p4g6As");
