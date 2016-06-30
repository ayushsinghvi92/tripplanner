var Sequelize = require('sequelize');
var db = require('./_db');

var Day =  db.define('day', {
	number: {
		type: Sequelize.INTEGER,
		unique: true
	}
})

module.exports = Day