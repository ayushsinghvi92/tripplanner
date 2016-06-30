'use strict';
/* global $ daysModule */

$(daysModule.load);

$.post('/api/days', {
	number: 1,
	hotel : "Hotel 1",
	activities : [],
	restaurants: []
});
$.post('/api/days', {
	number: 2,
	hotel : "Hotel 2",
	activities : [],
	restaurants: []
});
$.post('/api/days', {
	number: 3,
	hotel : "Hotel 3",
	activities : [],
	restaurants: []
});

$.get('/api/days').then(console.log);
