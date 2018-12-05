const db = require('./database');
const Sequelize = require('sequelize');

const Student = db.define('student', {
  firstname: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true
    }
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true,
      notNull: true,
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn.pixabay.com/photo/2015/05/20/21/45/student-776190_1280.png'
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }
});

module.exports = Student;
