// js/app.js

define([
	'phaser',
	'GS'
], function(Phaser, GS) {
	'use strict';

	function Game() {
		console.log('Making the Game!');
	}

	Game.prototype = {
		constructor: Game,

		start: function() {
			this.game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {
				preload: this.preload,
				create: this.create
			});
		},

		preload: function() {
			this.game.load.atlas('cat', 'assets/sprites/spritesheet.png', 'assets/sprites/sprites.json');
		},

		create: function() {
			var cat = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'cat');
			cat.anchor.setTo(0.5, 0.5);
		}
	};

	return Game;
});