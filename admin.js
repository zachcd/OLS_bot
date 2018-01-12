
const admin = (msg) => {
  if(msg.content.startsWith(prefix + "players")) {
    adminRole = msg.guild.roles.get("233058087030751232");
    if(msg.member.roles.has(adminRole.id)) {
      let args = msg.content.split("\n").slice(1);
        args.forEach(function(playerItem){
          console.log(playerItem);
          var player = playerItem.split(",");
          var elo = parseInt(player[2]);
          sequelize.Players.create({ FullName: player[0], IGN: player[1], PeakELO : elo, Roles: player[3], GamesPlayed: player[4], Notes:player5}).then(function(playerReturned) {
            playerReturned.update({PeakELO: elo}).then (function(eloupdated) {
              msg.channel.sendMessage(player[1] + " has been added to the draft." );
            })
          });
        })
    }
  }
}




export default admin;
