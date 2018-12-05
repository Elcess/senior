const db = require('./database');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  address: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Solar_system.jpg'
  },
  description: Sequelize.TEXT
});

module.exports = Campus;
