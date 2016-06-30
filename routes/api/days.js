var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models/day');
var db

router.get('/days', function(req, res){
	Day.findAll({}).then(function(result){
		res.send(result);
	}).catch(console.error);
})

router.post('/days', function(req, res){
	Day.build({
		number: req.body.number,
		hotelName: req.body.hotel,
		restaurantsArr: req.body.restaurants,
		activitiesArr: req.body.activities
	}).save().catch(console.error)
})
//

module.exports = router;