var Discord = require("discord.js");
var sequelize = require("./sequelize.js");
var Team = require("./sequelize.js");
var Players = require("./sequelize.js");
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

  if(msg.content.startsWith(prefix + "players")) {
    adminRole = msg.guild.roles.get("233058087030751232");
    if(msg.member.roles.has(adminRole.id)) {
      let args = msg.content.split("\n").slice(1);
        args.forEach(function(playerItem){
          console.log(playerItem);
          var player = playerItem.split(",");
          var currentBool;
          if (player[0] == "Current Student") {
            currentBool = true;
          } else {
            currentBool = false;
          }
          console.log(player);
          var elo = parseInt(player[3]);
          console.log(elo);
          sequelize.Players.create({Student: currentBool, FullName: player[1], IGN: player[2], PeakElO : elo, Roles: player[5], Commitment: player[6], Info:player[7]}).then(function(playerReturned) {
            playerReturned.update({PeakELO: elo}).then (function(eloupdated) {
              msg.channel.sendMessage(player[1] + " has been added to the draft." );
            })    
          });
        })
    }
  }
  if (msg.content.startsWith(prefix + "register")) {
    captainRole = msg.guild.roles.get("269529930977640450");
    if (msg.member.roles.has(captainRole.id)) {
       let args = msg.content.split(",").slice(1);
       teamName = args[0];
       captainIGN = args[1];
      sequelize.Team.create({ CaptainID: msg.author.id, TeamName: teamName, CaptainIGN: captainIGN}).then(function(team) {
        msg.channel.sendMessage("Team " + teamName + " was added to the database with 0 points");
      });
    }
  }
  if (msg.content.startsWith(prefix + "players")) {

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
