var Discord = require("discord.js");

//db models
var sequelize = require("./sequelize.js");
var Team = require("./sequelize.js");
var Players = require("./sequelize.js");

//message scripts
var bid = require("./bid.js");
var admin = require("./admin.js");
var register = require("./register.js");

var bot = new Discord.Client();
var Main = require('./main.js');

var centralMessage = false;
bot.on("message", msg => {

  let prefix="-"

  if(!msg.content.startsWith(prefix)) return;

  if(msg.author.bot) return;

  if(msg.content.startsWith(prefix + "init") && !centralMessage) {
    centralMessage = new Main(msg, sequelize);
  }

  admin(msg, centralMessage);
  bid(msg, centralMessage);
  register(msg, centralMessage);

});

bot.on('ready', () => {
  console.log('I am ready');
})

bot.on('error', e => { console.error(e); });

bot.login(process.env.npm_package_config_token);
