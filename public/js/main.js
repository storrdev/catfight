// js/main.js

require.config({
	shim: {
		'socketio': {
			exports: 'io'
		},
		'phaser': {
			exports: 'Phaser'
		}
	},
	paths: {
		phaser: 'libs/phaser.min',
		socketio: '../../socket.io/socket.io',
		// peer: '../peer-server',
		GS: '../game-server'
	}
});

require([ 'game' ], function(Game) {
	var game = new Game();
	game.start();
});