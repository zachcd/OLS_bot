var Discord = require("discord.js");
var sequelize = require("./sequelize.js");
var bot = new Discord.Client();

bot.on("message", msg => {

  let prefix="-"

  if(!msg.content.startsWith(prefix)) return;

  if(msg.author.bot) return;

  if (msg.content.startsWith(prefix + "fuck")) {
    msg.channel.sendMessage("Fuck Smegs!");
  }
  if (msg.content.startsWith(prefix + "fugg")) {
    msg.channel.sendMessage("XD");
  }

  if (msg.content.startsWith(prefix + "register")) {
    captainRole = msg.guild.roles.get("233053880685035550");
    if (msg.member.roles.has(captainRole.id)) {
       let args = message.content.split(",").slice(1);
      Team.create({ CaptainID: msg.author.id, TeamName: teamName, CaptainIGN: captainIGN}).then(function(team) {
        console.log("Team" + teamName + "Created");
      });
    }
  }

  if (msg.content.startsWith(prefix + "impeach")) {
    msg.channel.sendMessage("This should be the image of John.");
  }
});

bot.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    member.guild.defaultChannel.sendMessage(`Welcome to the LoL@Pitt Discord "${member.user.username}"!`);
});

bot.on('ready', () => {
  console.log('I am ready');
})

bot.on('error', e => { console.error(e); });

bot.login(process.env.npm_package_config_token);
