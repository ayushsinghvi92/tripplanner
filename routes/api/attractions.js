var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/hotels', function(req, res){
	Hotel.findAll({}).then(function(result){
		res.send(result);
	}).catch(console.error);
});

router.get('/restaurants', function(req, res){
	Restaurant.findAll({}).then(function(result){
		res.send(result);
	}).catch(console.error);
});

router.get('/activities', function(req, res){
	Activity.findAll({}).then(function(result){
		res.send(result);
	}).catch(console.error);
});

module.exports = router;
