const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize('just_tech_news_db', 'root', '@Xavier92939988', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;
