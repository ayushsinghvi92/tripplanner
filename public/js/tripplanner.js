'use strict';
/* global $ daysModule */

$(daysModule.load);

$.get('/api/days').then(console.log);
