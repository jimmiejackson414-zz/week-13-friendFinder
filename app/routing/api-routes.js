// Your api-routes.js file should contain two routes:

// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

//////////////////
// DEPENDENCIES //
//////////////////

var friendsData = require('../data/friends.js');
var path = require('path');


/////////////
// ROUTING //
/////////////

module.exports = function(app){

	app.get('api/friends', function(req, res){
		res.json(friendsData);
	});

	app.post('/api/friends', function(req, res){
		if(friendsData.length < 5){
			friendsData.push(req.body);
			res.json(true);
		}
		else{
			res.json(false);
		}
	});

	app.post('/api/clear', function(req, res){
		friendsData = [];
		console.log(friendsData);
	});
}