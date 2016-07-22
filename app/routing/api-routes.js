
//////////////////
// DEPENDENCIES //
//////////////////

var friendsData = require('../data/friends.js');
var path = require('path');


/////////////
// ROUTING //
/////////////

module.exports = function(app){

	app.get('/api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		res.json(friendsData);
		// res.json(true);
	});

	// app.post('/api/clear', function(req, res){
	// 	friendsData = [];
	// 	console.log(friendsData);
	// });
}