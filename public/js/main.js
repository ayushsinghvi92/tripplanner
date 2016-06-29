$(document).ready(function(){
	console.log("doc ready");
	$("#hotel-button").on("click", function(event){
		$("#hotel").append("<span class='title'>" + $("#hotel-choices option:selected").text() + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");

	})
	$("#restaurant-button").on("click", function(event){
		$("#rest").append("<span class='title'>" + $("#restaurant-choices option:selected").text() + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
	})
	$("#activity-button").on("click", function(event){
		$("#act").append("<span class='title'>" + $("#activity-choices option:selected").text() + "</span>" + "<button class='btn btn-xs btn-danger remove btn-circle'>x</button>");
	})
});