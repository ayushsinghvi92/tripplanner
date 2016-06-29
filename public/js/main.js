var arrayOfDays = [];
	
var Day = function (num) {
	this.num = num;
	this.hotels = [];
	this.restaurants =[];
	this.activities = [];
	this.markers = [];
}

var thisDayIndex = 0;
$(document).ready(function(){

	var map = initializeMap()
	console.log("doc ready");
	
	hotels.forEach(function (e) {
	$('#hotel-choices').append("<option>"+e.name+"</option>");
	})

	restaurants.forEach(function (e) {
	$('#restaurant-choices').append("<option>"+e.name+"</option>");
	})

	activities.forEach(function (e) {
	$('#activity-choices').append("<option>"+e.name+"</option>");
	})

	
	arrayOfDays.push(new Day(1))
	
	$("#day-add").on("click", function(event){	
		$dayButtons = $('.day-buttons');
		arrayOfDays.push(new Day(arrayOfDays.length))
		console.dir($dayButtons);
		$dayButtons.append("<span class='btn btn-circle day-btn'>" + arrayOfDays.length + "</span>");	
	});

	$('.day-buttons').on('click', '.day-btn', function (event) {
		var prevDayIndex = thisDayIndex;
		$this = $(this);
		thisDayIndex = Number($this.text()) - 1;
		$('.day-buttons').children().removeClass("current-day");
		$this.addClass('current-day');

		arrayOfDays[prevDayIndex].markers.forEach(function (e){
			e.marker.setMap(null);
		})

		$('#hotel').children().remove();
		$('#rest').children().remove();
		$('#act').children().remove();

		arrayOfDays[thisDayIndex].hotels.forEach(function (e) {
			$("#hotel").append("<span class='title'>" + e.name + "</span>" + "<button id = 'del-hotel' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
		})

		arrayOfDays[thisDayIndex].restaurants.forEach(function (e) {
			$("#rest").append("<span class='title'>" + e.name + "</span>" + "<button id = 'del-hotel' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
		})

		arrayOfDays[thisDayIndex].activities.forEach(function (e) {
			$("#act").append("<span class='title'>" + e.name + "</span>" + "<button id = 'del-hotel' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
		})

		arrayOfDays[thisDayIndex].markers.forEach(function (e){
			e.marker.setMap(map)
		})
	})

	$("#hotel-button").on("click", function(event){
		var hotel = {
			name: $("#hotel-choices option:selected").text() + ""
		}
		hotels.forEach(function (e) {
			if(hotel.name === e.name) {
				return hotel = e;
			}
		})

		arrayOfDays[thisDayIndex].hotels.push(hotel);

		$("#hotel").append("<span class='title'>" + hotel.name + "</span>" + "<button id = 'del-hotel' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
		
		arrayOfDays[thisDayIndex].markers.push({
			name: hotel.name,
			marker: drawMarker('hotel', hotel.place.location, map)
		})
		console.dir(map);
	})

	$("#restaurant-button").on("click", function(event){
		var restaurant = {
			name: $("#restaurant-choices option:selected").text()
		}

		restaurants.forEach ( function (e) {
			if ( restaurant.name === e.name) {
				return restaurant = e;
			}
		})

		arrayOfDays[thisDayIndex].restaurants.push(restaurant);
		arrayOfDays[thisDayIndex].markers.push({
			name: restaurant.name,
			marker: drawMarker('restaurant', restaurant.place.location, map)
		})
		$("#rest").append("<span class='title'>" + restaurant.name + "</span>" + "<button id = 'del-rest' class='btn btn-xs btn-danger remove btn-circle'>x</button>");		
	})

	$("#activity-button").on("click", function(event){
		var activity = {
			name: $("#activity-choices option:selected").text()
		}
		activities.forEach(function (e) {
			if(activity.name === e.name) {
				return activity = e;
			}
		})

		arrayOfDays[thisDayIndex].activities.push(activity);
		arrayOfDays[thisDayIndex].markers.push({
			name: activity.name,
			marker: drawMarker('activity', activity.place.location, map)
		})

		$("#act").append("<span class='title'>" + activity.name + "</span>" + "<button id = 'del-activity' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
	})


	$('#itinerary').on('click', '.remove', function (event) {
		$this = $(this);
		var $toRemove = $this.prev();

		if($this.id == 'del-hotel') {
			arrayOfDays[thisDayIndex]
		}		
		else if ($this.id == 'del-activity') {
			//adsf
		}
		else {
			//asdf
		}

		$this.remove();
		$toRemove.remove();
	})

});