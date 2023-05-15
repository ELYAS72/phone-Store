const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config()


const sequelize = new Sequelize( process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PWRD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
  });

  module.exports = sequelize;