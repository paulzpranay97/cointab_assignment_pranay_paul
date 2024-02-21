
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Post = sequelize.define('post', {
  name: DataTypes.STRING,
  title: DataTypes.STRING,
  body: DataTypes.STRING,
  company: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  timestamps: false 
});

module.exports = Post;