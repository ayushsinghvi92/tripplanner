var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models/day');
var db

//list all the days
router.get('/days', function(req, res){
	Day.findAll({}).then(function(result){
		res.send(result);
	}).catch(console.error);
})

//create a new day
router.post('/days', function(req, res){
	console.log(req.body.number);
	Day.build({
		number: req.body.number
	}).save()
	  .then(function(){
	  	res.send({message: "data is saved"});
	  })
	  .catch(console.error)
})

//get day by id
router.get('/day/:id', function (req, res) {
	Day.findOne({where: {
		id: req.params.id
	}}).then(function (day) {
		res.send(day);
	}).catch(console.error);
})


//delete one day by id

router.delete('/day/:id', function (req, res) {
	Day.findOne({where: {
		number: req.params.id
	}})
	.then(function (day) {
		return day.destroy();
	})
	.then(function () {
		return Day.findAll();
	})
	.then(function (days) {
		console.log('days:',days);
		var arrProm = days.map(function (day, i){
			return day.update({number: i+1});
		})
		return Promise.all(arrProm);
	})
	.then(function (savedDays){
		console.log("reached sending area")
		res.send({message: "deleted"})
		console.log('saved days:', savedDays);
		return savedDays;
	})
	.catch(console.error.bind(console))
})

//update info on one day

router.post('/day/:id/:attraction', function (req,res) {
	Day.findOne({where:{
		number:req.params.id
	}}).then(function (day){
		if(req.params.attraction === 'hotel') {
			day.hotelName = req.body.hotel;
		} else if (req.params.attraction === 'activities') {
			day.activitiesArr.push(req.body.activity);
		} else {
			day.restaurantsArr.push(req.body.restaurant)
		}
		day.save();
	}).catch(consoel.error)
})

//delete info on one day 

router.delete('/day/:id/:attraction', function (req,res) {
	Day.findOne({where:{
		id:req.params.id
	}}).then(function (day){
		if(req.params.attraction === 'hotel') {
			day.hotelName = '';
		} else if (req.params.attraction === 'activities') {
			var index = day.activitiesArr.indexOf(req.body.activity);
			day.activitiesArr.splice(index, 1);
		} else {
			var index = day.restaurantsArr.indexOf(req.body.activity);
			day.restaurantsArr.splice(index, 1);
		}
		day.save();
	}).catch(console.error)
})

//update the whole day simultaneously
router.put('/day/:id', function (req, res) {
	Day.findOne({where: {
		id:req.params.id
	}}).then(function (day){
		day.hotelName = req.body.hotel,
		day.activitiesArr = req.body.activities,
		day.restaurantsArr = req.body.restaurants
		return day.save();
	}).catch(console.error)
})

module.exports = router;