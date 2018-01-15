/*this is the only message in the channel

it should look something like this:

  {X} Players remaining to be drafted
  ________
  Teams
  <TEAM NAME> - <POINTS> - <CAPTAIN> - <PLAYER 1> - <PLAYER 2> - <PLAYER 3> - <PLAYER 4>


*/
class Main  {

  const message = {};
  const dbref = {}

  constructor(channel, db) {
        channel.messages().deleteAll();
        channel.send('Starting the draft')
          .then(m => this.message = m)
          .catch(console.error);
          this.dbref = db;
        this.rerender();
  }

  rerender() {
    this.dbref.Team.findAll().then(teams => {
      console.log(Teams);
    })
    this.dbref.Players.findAll().then(players => {
      console.log(Players);
    })


    this.message.edit()
  }
}
