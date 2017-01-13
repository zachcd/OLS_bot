var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", msg => {

  let prefix="-"

  if(!msg.content.startsWith(prefix)) return;
  if (msg.content.startsWith(prefix + "fuck")) {
    msg.channel.sendMessage("Fuck Smegs!");
  }
  if (msg.content.startsWith(prefix + "impeach")) {
    msg.channel.sendMessage("This should be a picture!");
  }
});

bot.on('ready', () => {
  console.log('I am ready');
})
bot.login("MjY5NDg1MDY0ODAxMzUzNzM4.C1q0-w.YtX8R_Jio4bGINMrF_gIdGjoj_w");
