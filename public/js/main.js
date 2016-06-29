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


	$("#hotel-button").on("click", function(event){
		var hotel = {
			name: $("#hotel-choices option:selected").text() + ""
		}

		$("#hotel").append("<span class='title'>" + hotel.name + "</span>" + "<button id = 'del-hotel' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
		
		hotels.forEach(function (e) {
			if(hotel.name === e.name) {
				return hotel = e;
			}
		})
		drawMarker ('hotel' , hotel.place.location, map)

	})
	$("#restaurant-button").on("click", function(event){
		var restaurant = {
			name: $("#restaurant-choices option:selected").text()
		}

		$("#rest").append("<span class='title'>" + restaurant.name + "</span>" + "<button id = 'del-rest' class='btn btn-xs btn-danger remove btn-circle'>x</button>");
		
		restaurants.forEach ( function (e) {
			if ( restaurant.name === e.name) {
				return restaurant = e;
			}
		})

		drawMarker('restaurant', restaurant.place.location, map)

	})
	$("#activity-button").on("click", function(event){
		var activity = {
			name: $("#activity-choices option:selected").text()
		}

		$("#act").append("<span class='title'>" + activity.name + "</span>" + "<button id = 'del-activity' class='btn btn-xs btn-danger remove btn-circle'>x</button>");

		activities.forEach(function (e) {
			if(activity.name===e.name) {
				return activity = e;
			}
		})

		drawMarker('activity', activity.place.location, map);
	})


	$('#itinery').on('click', '.remove', function (event) {

	})

});