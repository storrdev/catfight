var gs = require('game-server');

gs.start(function() {
	gs.app.get('/', function(req,res){
		res.sendFile(__dirname + '/public/index.html');
	});
});