

const register = (msg) => {
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
}

export default register
