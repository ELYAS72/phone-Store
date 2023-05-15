const { Sequelize, DataTypes } = require('sequelize');
const db = require('../dbConfig');

const contact = db.define("contact", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullName: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    subject: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    }
});

db.sync();

module.exports = contact;
