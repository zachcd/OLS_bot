var Sequelize = require("sequelize");

var database = new Sequelize('OLS', 'admin', 'password', {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'database.sqlite'
});

var Players = database.define('player', {
  FullName: {
    type: Sequelize.STRING
  },
  IGN: {
    type: Sequelize.STRING
  },
  PeakELO: {
    type:Sequelize.INTEGER
  },
  Roles: {
    type: Sequelize.STRING
  },
  GamesPlayed: {
    type:Sequelize.STRING
  },
  Notes: {
    type: Sequelize.STRING
  },
  PointsSpentOn: {
    type: Sequelize.INTEGER
  }
})
var Team = database.define('team', {
  CaptainID: {
    type: Sequelize.STRING
  },
  TeamName: {
    type: Sequelize.STRING
  },
  CaptainIgn: {
    type: Sequelize.STRING
  },
  PointsLeft: {
    type: Sequelize.INTEGER
  },
  Player1: {
    type: Sequelize.STRING,
   references: {
     model: Players,
     key: 'IGN',
   }
  },
  Player2: {
    type: Sequelize.STRING,
     references: {
       model: Players,
       key: 'IGN',
     }
  },
  Player3: {
  type: Sequelize.STRING,
   references: {
     model: Players,
     key: 'IGN',
   }
  },
  Player4: {
    type: Sequelize.STRING,
     references: {
       model: Players,
       key: 'IGN',
     }
  }
})


database.sync().then(() => {
  console.log("database");
})
database
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports.Team = Team;
module.exports.database = database;
module.exports.Players = Players;
