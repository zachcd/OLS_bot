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

  if (msg.content.startsWith(prefix + "register")) {
    captainRole = msg.guild.roles.get("233053880685035550");
    if (msg.member.roles.has(captainRole.id)) {
       let args = msg.content.split(",").slice(1);
       teamName = args[0];
       captainIGN = args[1];
      sequelize.Team.create({ CaptainID: msg.author.id, TeamName: teamName, CaptainIGN: captainIGN}).then(function(team) {
        msg.channel.sendMessage("Team " + teamName + " was added to the database with 0 points");
      });
    }
  }

  if (msg.content.startsWith(prefix + "startBidding")) {
    sequelize.Players.findAll().then( function(players) => {
        players.sort(function(a, b) {
          return a.PeakElo - b.PeakElo;
        })
        console.log(players);
    })
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

function AddPlayer(Player, Team) {
    if (Team.Player1 == null) {
      Team.update({Player1: Player.IGN}).then(updated => {
        return ("Player was added, team has 2 players");
      })
    } else if (Team.Player2 == null) {
      Team.update({Player2: Player.IGN}).then(updated => {
        return ("Player was added, team has 3 players");
      })
    } else if (Team.Player3 == null) {
      Team.update({Player3: Player.IGN}).then(updated => {
        return ("Player was added, team has 4 players");
      })
    } else if (Team.Player4 == null) {
      Team.update({Player4: Player.IGN}).then(updated => {
        return ("Player was added, team is full");
      })
    }
function removeLastPlayer(Team) {
  if (Team.Player1 == null ) {
    return ("There are no Players on this team");
  }
  else if (Team.Player2 == null) {
    Team.update({Player1: null}).then(updated => {
      return ("Player 1 was removed from this team");
    })
  }
  else if (Team.Player3 == null) {
    Team.update({Player2: null}).then(updated => {
      return ("Player 2 was removed from this team");
    })
  }
  else if (Team.Player4 == null) {
    Team.update({Player3: null}).then(updated => {
      return ("Player 3 was removed from this team");
    })
  } else {
    Team.update({Player4: null}).then(updated => {
      return ("Player 4 was removed from this team");
    })
  }
}
