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

	$("#day-add").on("click", function(event){
		var day = {
			num: $(".day-buttons").length + 1,
			hotels: $("#hotel"),
			restaurant: $("#restaurant"),
			activity: $("#activity"),
			marker: []
		};
		$(".day-buttons").append("<span class='btn btn-circle day-btn'>" + day.num + "</span>");
	});



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
		$(map).data(hotel.name, {data: drawMarker('hotel', hotel.place.location, map)});
		console.dir(map);

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
		// we need to modify this
		drawMarker('restaurant', restaurant.place.location, map)

	})
	$("#activity-button").on("click", function(event){
		var activity = {
			name: $("#activity-choices option:selected").text()
		}

		$("#act").append("<span class='title'>" + activity.name + "</span>" + "<button id = 'del-activity' class='btn btn-xs btn-danger remove btn-circle'>x</button>");

		activities.forEach(function (e) {
			if(activity.name === e.name) {
				return activity = e;
			}
		})

		$(map).data(activity.name, drawMarker('activity', activity.place.location, map));
	})


	// $('#itinerary').on('click', '.remove', function (event) {
	// 	console.dir($(this).context.previousSibling.innerText);
	// 	console.log($(map).index($(this).context.previousSibling.innerText));
	// 	$(map).index($(this).context.previousSibling.innerText).marker.setMap(null);
	// 	$(this).context.previousSibling.remove();
	// 	$(this).remove();
	// })

});